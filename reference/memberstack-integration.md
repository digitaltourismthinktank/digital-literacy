# Memberstack Integration — FDB 2026

Documents what is actually wired up in this codebase. Where something is not yet implemented it says so.

---

## Package

```
@memberstack/dom  2.0.10
```

This is the DOM package (browser-only), not the admin package. Installed as a runtime dependency in `package.json`. There is no `@memberstack/admin` package in this project.

---

## Public key

The public key is hardcoded as a string literal inside `site/page-register.jsx`:

```js
publicKey: 'pk_015528a294c57b78d4a0'
```

It is not stored in an environment variable or `.env` file. The public key is safe in client-side code — it is designed to be exposed. The Memberstack secret/admin key is not present anywhere in this codebase and is not needed for anything currently implemented.

---

## Allowed domains

`fdb.thinkdigital.travel` has been added to the Memberstack allowed domains list. The staging Netlify URL has not been added, so login will fail on staging even though the modal will open.

---

## Initialisation

`@memberstack/dom` is initialised via a module-level singleton promise in `site/page-register.jsx`:

```js
let _msPromise = null;
function getMemberstack() {
  if (_msPromise) return _msPromise;
  _msPromise = import('@memberstack/dom').then(({ default: memberstackDOM }) =>
    memberstackDOM.init({ publicKey: 'pk_015528a294c57b78d4a0' })
  ).catch(() => null);
  return _msPromise;
}
```

The dynamic `import()` means the package is never loaded during SSR/prerender. The singleton ensures it is only initialised once per page load regardless of how many components call `getMemberstack()`. If initialisation fails (wrong domain, network error), the promise resolves to `null` and the calling code falls back to guest state.

---

## Login

Login is opened with the SDK's modal API:

```js
async function openMemberstackLogin(onComplete) {
  const ms = await getMemberstack();
  if (!ms) return false;
  try {
    await ms.openModal('LOGIN');
    if (onComplete) onComplete();
    return true;
  } catch {
    return false;
  }
}
```

`ms.openModal('LOGIN')` opens the Memberstack login modal. The promise resolves when the modal closes — not necessarily after a successful login. After the modal closes, `onComplete` (which calls `refetch()` in the hook) re-runs `getCurrentMember()` to check whether login actually succeeded and update the UI.

The login modal is triggered only on explicit button click. It is not auto-triggered on page load.

---

## Logout

Not implemented. There is no logout button, logout route, or call to `ms.logout()` anywhere in the codebase.

---

## Signup

Not implemented. `ms.openModal('SIGNUP')` is not called anywhere. New members are expected to sign up through the main DTTT website.

---

## Detecting the current member

A `useMemberstack()` hook in `site/page-register.jsx` handles member detection:

```js
function useMemberstack() {
  const [status, setStatus] = useState('loading'); // loading | member | free | guest
  const [memberData, setMemberData] = useState(null);
  const [tick, setTick] = useState(0);
  const refetch = () => setTick(t => t + 1);

  useEffect(() => {
    let cancelled = false;
    getMemberstack().then(ms => {
      if (!ms) { setStatus('guest'); return; }
      return ms.getCurrentMember();
    }).then(result => {
      if (cancelled || !result) return;
      if (!result.data) { setStatus('guest'); return; }
      // ... extract fields, set status
    }).catch(() => { if (!cancelled) setStatus('guest'); });
    return () => { cancelled = true; };
  }, [tick]);

  return { status, memberData, refetch };
}
```

`status` has four values:

| Value | Meaning |
|---|---|
| `loading` | `getCurrentMember()` has not resolved yet |
| `member` | Logged in on a paid plan |
| `free` | Logged in but on the free plan (`pln_free-account-km850j6k`) |
| `guest` | Not logged in, or Memberstack unavailable |

`refetch()` increments `tick`, which causes the `useEffect` to re-run. This is called after the login modal closes to re-check session state.

---

## Member data fields read

The following fields are read from the member object returned by `getCurrentMember()`:

| Field | Path on member object |
|---|---|
| Email | `m.auth.email` |
| First name | `m.customFields['first-name']` |
| Last name | `m.customFields['last-name']` |
| Organisation | `m.customFields['work-organisation']` |
| Plan IDs | `m.planConnections[].planId` (joined as comma-separated string) |

All custom field reads use `|| ''` fallbacks. The combined name is `(first + ' ' + last).trim()`.

---

## Plan logic

One plan ID is significant:

| Plan ID | Treatment |
|---|---|
| `pln_free-account-km850j6k` | Free/basic account — treated as non-member, redirected to delegate path |
| Any other plan ID | Paid member — gets free registration with pre-filled Typeform |

If `planConnections` is null or empty, the member is treated as free.

---

## Where Memberstack is used

| File | What it does |
|---|---|
| `site/page-register.jsx` | All functional Memberstack code lives here |
| `site/page-privacy.jsx` | Lists Memberstack in the privacy disclosure table as a data processor — no functional code |

Memberstack is not referenced in any other page, component, or route. It is not in `site/index.html`, `site/components.jsx`, or any layout file.

---

## Route and page gating

Not implemented. There are no protected routes. Any page on the site is accessible without being logged in. The Memberstack check only runs when a user lands on `/register` and selects the DTTT Member tab.

---

## Writing member data

Not implemented. There are no calls to update custom fields, plan connections, or any other member record data. The codebase only reads from Memberstack.

---

## Custom JSON fields

Not implemented. No custom field in this project stores JSON. If a new project needs member-level progress or state storage, it would use `ms.updateMember({ customFields: { 'field-name': JSON.stringify(data) } })` — but that pattern does not exist here yet.

---

## Gotchas

**`openModal` resolves on close, not on success.** The promise returned by `ms.openModal('LOGIN')` resolves when the modal is dismissed for any reason — successful login, cancel, or closing the overlay. Always call `getCurrentMember()` after the modal closes to determine whether login actually happened. This is what `refetch()` does here.

**The singleton can go stale during hot module reload in development.** `_msPromise` is module-level. If Vite HMR replaces the module, the cached promise is lost but may still hold the old initialised instance in memory. In practice this is not a problem during normal development, but if Memberstack behaves oddly after a hot reload, a full page refresh will fix it.

**SSR/prerender safety.** The `useEffect` containing `getMemberstack()` never runs during the prerender step (`prerender.mjs`). The initial server-rendered HTML always shows the `loading` state for the member tab. The client picks up from there on hydration.

**Domain restriction errors are silent.** If the page is loaded on an unlisted domain, `getMemberstack()` resolves to `null` (due to the `.catch(() => null)`) and the component falls back to `guest` state. There is no visible error. The sign-in button shows a fallback note when `openMemberstackLogin()` returns `false`.
