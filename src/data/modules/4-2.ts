// Rich content for Module 4.2 — Spreadsheets and CSVs.
// The inspector data and self-check replies are serialised client-side via define:vars;
// all other frame content lives directly in the page template.

export const data42 = {
  inspector: {
    clean: {
      raw: [
        ['date,site,visitors,revenue_gbp'],
        ['2025-06-01,Harbour Museum,342,1710'],
        ['2025-06-02,Harbour Museum,389,1945'],
        ['2025-06-03,Harbour Museum,401,2005'],
        ['2025-06-04,Harbour Museum,298,1490'],
        ['2025-06-05,Harbour Museum,455,2275'],
      ] as [string, true?][],
      grid: [
        ['date', 'site', 'visitors', 'revenue_gbp'],
        ['2025-06-01', 'Harbour Museum', '342', '1710'],
        ['2025-06-02', 'Harbour Museum', '389', '1945'],
        ['2025-06-03', 'Harbour Museum', '401', '2005'],
        ['2025-06-04', 'Harbour Museum', '298', '1490'],
        ['2025-06-05', 'Harbour Museum', '455', '2275'],
      ],
      cols: 4,
      aiSummary: 'I can read this cleanly. Five days of visitor data for Harbour Museum.',
      aiItems: [
        { ok: true, t: 'Columns understood: date, site, visitors, revenue (GBP)' },
        { ok: true, t: 'Total visitors: 1,885' },
        { ok: true, t: 'Total revenue: £9,425' },
        { ok: true, t: 'Busiest day: 5 June, 455 visitors' },
      ],
      askAnswer: { text: '£9,425 ✓', good: true },
    },
    broken: {
      raw: [
        ['Visitor Report June 2025,,,'],
        [',,,'],
        ['Date,Site,Visitors,Revenue'],
        ['1st June,Harbour Museum,342,£1710'],
        ['2nd June,Harbour Museum, 389 ,£1,945', true],
        ['June 3,Harbour Museum,four hundred,2005'],
        [',,,'],
        ['Total,,1132,'],
      ] as [string, true?][],
      grid: [
        ['Visitor Report June 2025', '', '', '', ''],
        ['', '', '', '', ''],
        ['Date', 'Site', 'Visitors', 'Revenue', ''],
        ['1st June', 'Harbour Museum', '342', '£1710', ''],
        ['2nd June', 'Harbour Museum', ' 389 ', '£1', '945'],
        ['June 3', 'Harbour Museum', 'four hundred', '2005', ''],
        ['', '', '', '', ''],
        ['Total', '', '1132', '', ''],
      ],
      cols: 5,
      aiSummary: 'I can see this, but several things are getting in my way.',
      aiItems: [
        { ok: false, t: "A title row and blank rows that aren’t data" },
        { ok: false, t: 'Dates in three formats (1st June, 2nd June, June 3)' },
        { ok: false, t: '£1,945 split across two columns by its comma' },
        { ok: false, t: "“four hundred” is text, so I can’t add it" },
        { ok: false, t: "A “Total” row of 1,132 that doesn’t match the data" },
      ],
      askAnswer: { text: "Can’t total reliably ✗", good: false },
      // [row, col] 0-indexed pairs highlighted bad in the grid view
      badCells: [[4, 4], [4, 3], [5, 2], [4, 2], [3, 0], [5, 0], [0, 0]] as [number, number][],
    },
  },
  selfCheckReplies: {
    worked: "Good. That’s the core skill: spot the formatting problems, then ask for a clean version. You can do this with any messy export now.",
    partly: "That’s normal. The usual culprits are dates in mixed formats and numbers with symbols or commas. Try fixing just those two first, then run it again.",
    stuck: "No problem. Check the file has one header row and one record per line. If the AI can’t read it at all, open it in a spreadsheet, re-save as CSV, and try again.",
  },
};

export type Data42 = typeof data42;
