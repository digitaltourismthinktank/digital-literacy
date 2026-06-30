// Rich content for Module 4.4 — Schemas, Fields, and Clean Data.
// The dataset is the dirtied Harbourford sites-and-visits table.

export const data44 = {
  inspector: {
    // rows[0] is the header row; rows[1..n] are data rows
    rows: [
      ['id', 'site', 'type', 'country', 'date', 'visitors'],
      ['1', 'Harbour Museum', 'museum', 'UK', '2025-06-01', '342'],
      ['2', 'Old Lighthouse', 'monument', 'U.K.', '2025-06-02', '118'],
      ['3', 'Cliff Gardens', 'garden', 'United Kingdom', '01/06/2025', '231'],
      ['4', 'Harbour Museum', 'museum', 'UK', '2025-06-02', '-5'],
      ['5', 'Old Lighthouse', 'monument', 'UK', '2025-06-02', 'three hundred'],
      ['1', 'Harbour Museum', 'museum', 'UK', '2025-06-01', '342'],
    ],
    // [rowIndex, colIndex] 0-indexed; row 0 = header
    badCells: [
      [2, 3],  // U.K. — inconsistent country
      [3, 3],  // United Kingdom — inconsistent country
      [3, 4],  // 01/06/2025 — wrong date format
      [4, 5],  // -5 — negative visitor count
      [5, 5],  // 'three hundred' — text in number column
      [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], // entire duplicate row
    ] as [number, number][],
    schema: [
      { name: 'id',       type: 'Integer', rule: 'Unique, no gaps',                    example: '1' },
      { name: 'site',     type: 'Text',    rule: 'One of three site names',             example: 'Harbour Museum' },
      { name: 'type',     type: 'Text',    rule: 'One of: museum, monument, garden',    example: 'museum' },
      { name: 'country',  type: 'Text',    rule: 'Consistent single value',             example: 'UK' },
      { name: 'date',     type: 'Date',    rule: 'YYYY-MM-DD format',                   example: '2025-06-01' },
      { name: 'visitors', type: 'Integer', rule: '0 or above',                          example: '342' },
    ],
    breaks: [
      { fault: 'Three spellings of UK',      what: 'Visitor count by country splits three ways and undercounts' },
      { fault: 'Date in wrong format',       what: 'Date-based queries skip or misplace that row entirely' },
      { fault: 'Negative visitor count',     what: 'Totals and averages go wrong; a negative visit makes no sense' },
      { fault: 'Text in a number column',    what: 'AI cannot add or compare the value; the row is invisible to calculations' },
      { fault: 'Duplicate row',              what: 'Every count, total, and average double-counts that day\'s numbers' },
    ],
  },
  selfCheckReplies: {
    worked:
      'Good. A short audit before you feed data to AI finds the problems before they quietly produce wrong answers. Two minutes here saves hours of confusion downstream.',
    partly:
      'The trickiest ones are inconsistent categories, because AI takes them at face value. Run a quick count of distinct values in each text column — anything unexpected is a schema violation.',
    stuck:
      'Start with just two checks: count distinct values in each text column (anything unexpected is a problem), and look for any column that should be a number but contains text. Those two find most of the common faults.',
  },
};

export type Data44 = typeof data44;
