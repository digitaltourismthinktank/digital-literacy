// Rich content for Module 4.6 — Data Pipes: Getting Data In and Out.
// The flow builder is rendered from component HTML; only self-check replies are serialised.

export const data46 = {
  selfCheckReplies: {
    worked:
      'Good. You now have a live pipe instead of a one-off copy. When you change the source, the destination follows — confirm that once with a real value change, and the connection is proved.',
    partly:
      'The most common issue is mistaking an integration that runs once for a live sync. Check your connector\'s settings for a trigger or schedule option — a true sync runs on an interval, a one-time export runs once and stops.',
    stuck:
      'Start with the simplest possible pipe: a free form connected to a Google Sheet. Fill in the form, check the sheet updates. That confirms the principle. Then apply the same thinking to your actual tools.',
  },
};

export type Data46 = typeof data46;
