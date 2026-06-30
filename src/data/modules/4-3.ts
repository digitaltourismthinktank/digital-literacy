// Rich content for Module 4.3 — JSON and Data Interchange.

export const data43 = {
  inspector: {
    oneSite: {
      csvLines: [
        'date,site,visitors,revenue_gbp',
        '2025-06-01,Harbour Museum,342,1710',
        '2025-06-02,Harbour Museum,389,1945',
        '2025-06-03,Harbour Museum,401,2005',
      ],
      jsonText:
        '{\n  "site": "Harbour Museum",\n  "type": "museum",\n  "visits": [\n    { "date": "2025-06-01", "visitors": 342, "revenue_gbp": 1710 },\n    { "date": "2025-06-02", "visitors": 389, "revenue_gbp": 1945 },\n    { "date": "2025-06-03", "visitors": 401, "revenue_gbp": 2005 }\n  ]\n}',
    },
    allSites: {
      csvLines: [
        'date,site,visitors,revenue_gbp',
        '2025-06-01,Harbour Museum,342,1710',
        '2025-06-01,Old Lighthouse,118,590',
        '2025-06-01,Cliff Gardens,231,0',
        '2025-06-02,Harbour Museum,389,1945',
        '2025-06-02,Old Lighthouse,94,470',
        '2025-06-02,Cliff Gardens,278,0',
      ],
      jsonText:
        '[\n  {\n    "site": "Harbour Museum",\n    "type": "museum",\n    "visits": [\n      { "date": "2025-06-01", "visitors": 342, "revenue_gbp": 1710 },\n      { "date": "2025-06-02", "visitors": 389, "revenue_gbp": 1945 }\n    ]\n  },\n  {\n    "site": "Old Lighthouse",\n    "type": "monument",\n    "visits": [\n      { "date": "2025-06-01", "visitors": 118, "revenue_gbp": 590 },\n      { "date": "2025-06-02", "visitors": 94, "revenue_gbp": 470 }\n    ]\n  },\n  {\n    "site": "Cliff Gardens",\n    "type": "garden",\n    "visits": [\n      { "date": "2025-06-01", "visitors": 231, "revenue_gbp": 0 },\n      { "date": "2025-06-02", "visitors": 278, "revenue_gbp": 0 }\n    ]\n  }\n]',
    },
  },
  selfCheckReplies: {
    worked:
      "Good. You can now open a JSON file and read what it holds. That removes a lot of guesswork when you're looking at what a tool is sending or receiving.",
    partly:
      'The structure clicks once you spot the pattern: curly braces are a single record, square brackets are a list. Try highlighting just one { } block at a time.',
    stuck:
      'Start with a tiny example: paste { "name": "test" } into JSONLint and let it validate. Then add a list: { "items": [1, 2, 3] }. Those two shapes are most of JSON.',
  },
};

export type Data43 = typeof data43;
