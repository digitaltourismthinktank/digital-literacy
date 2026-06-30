// progressStore — wraps progress persistence so the app never calls Memberstack directly.
// This version uses localStorage as a session-scoped fallback.
// Step 6 (Memberstack wiring) replaces the read/write functions below.

interface Progress {
  complete: boolean;
  furthest: number;
}
type ProgressMap = Record<string, Progress>;

const KEY = 'dl_progress';

function read(): ProgressMap {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '{}'); }
  catch { return {}; }
}

function write(map: ProgressMap): void {
  try { localStorage.setItem(KEY, JSON.stringify(map)); }
  catch { /* storage unavailable */ }
}

export const progressStore = {
  get(moduleId: string): Progress | null {
    return read()[moduleId] ?? null;
  },
  getAll(): ProgressMap {
    return read();
  },
  setComplete(moduleId: string): void {
    const map = read();
    const current = map[moduleId] ?? { complete: false, furthest: 0 };
    map[moduleId] = Object.assign({}, current, { complete: true });
    write(map);
  },
  setFurthest(moduleId: string, step: number): void {
    const map = read();
    const current = map[moduleId] ?? { complete: false, furthest: 0 };
    if (step > current.furthest) {
      map[moduleId] = Object.assign({}, current, { furthest: step });
      write(map);
    }
  },
};
