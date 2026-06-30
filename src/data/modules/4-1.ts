// Rich content for Module 4.1 — Structured vs Unstructured Data.
// The classifier card data is serialised; everything else is in the component HTML.

export const data41 = {
  classifier: {
    cards: [
      {
        id: 'spreadsheet',
        text: 'A visitor-numbers spreadsheet',
        bucket: 'structured',
        why: 'Already has rows, columns, and named fields. AI can analyse it directly.',
        aiHandle: 'Use directly',
      },
      {
        id: 'photos',
        text: 'A folder of event photos',
        bucket: 'unstructured',
        why: 'No fields or labels — just pixels. AI can describe images but cannot extract numbers.',
        aiHandle: 'Read only',
      },
      {
        id: 'emails',
        text: 'A thread of customer emails',
        bucket: 'unstructured',
        why: 'Free-flowing prose. AI can read it but must hunt for any structured data inside.',
        aiHandle: 'Read only',
      },
      {
        id: 'csv',
        text: 'A booking-system CSV export',
        bucket: 'structured',
        why: 'Clean rows and columns — AI can use it straight away.',
        aiHandle: 'Use directly',
      },
      {
        id: 'pdf',
        text: 'A 40-page strategy PDF',
        bucket: 'unstructured',
        why: 'Prose and diagrams with no built-in fields. AI reads it but cannot query it like a table.',
        aiHandle: 'Read only',
      },
      {
        id: 'database',
        text: 'A customer database',
        bucket: 'structured',
        why: 'Named fields and records — AI can query and filter it directly.',
        aiHandle: 'Use directly',
      },
      {
        id: 'reviews',
        text: 'A stack of visitor reviews',
        bucket: 'unstructured',
        why: 'Free text. AI can extract themes but not precise numbers.',
        aiHandle: 'Read only',
      },
      {
        id: 'form',
        text: "A web enquiry form's entries",
        bucket: 'semi',
        why: 'Has some structured fields (name, email, date) but usually includes free-text boxes too.',
        aiHandle: 'Tidy or convert first',
      },
      {
        id: 'transcript',
        text: 'An interview transcript',
        bucket: 'unstructured',
        why: 'Prose conversation. AI reads and summarises well but cannot analyse it as tabular data.',
        aiHandle: 'Read only',
      },
      {
        id: 'social',
        text: 'A social media comments feed',
        bucket: 'semi',
        why: 'Has metadata fields (timestamp, author, like count) alongside free-text comments.',
        aiHandle: 'Tidy or convert first',
      },
    ],
  },
  selfCheckReplies: {
    worked:
      'Good. You can now look at anything in your organisation and know whether AI can use it directly, whether it needs a conversion step, or whether AI can only read it rather than analyse it.',
    partly:
      'The tricky ones are the in-between cases. A form or an email has some structure but not a clean table, so it often needs a step of extraction first. When in doubt, ask: does it already have named fields in rows?',
    stuck:
      'Start with the obvious two ends: a spreadsheet is structured, a folder of documents is not. Sort those first, and the middle becomes clearer by contrast. Anything with some labelled fields but also free text is semi-structured.',
  },
};

export type Data41 = typeof data41;
