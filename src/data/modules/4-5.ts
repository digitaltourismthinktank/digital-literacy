// Rich content for Module 4.5 — Databases.
// The flat spreadsheet data and self-check replies are the only serialised pieces;
// the relational, document, and vector views are rendered from hardcoded HTML.

export const data45 = {
  selfCheckReplies: {
    worked:
      'Good. The Sites table now holds each site once, and the Visits table holds each day\'s numbers. Change a site\'s capacity in one row and every linked visit reflects it.',
    partly:
      'The key step is separating which columns describe the site from which describe a single visit. Site name, type, and capacity go in Sites. Date, visitors, and revenue go in Visits. Add a site_id to join them.',
    stuck:
      'List your columns in two groups: "about the site" and "about one visit". Site name, type, capacity → Sites table. Date, visitors, revenue → Visits table. Add a site_id to Visits to link them back. That is the whole split.',
  },
};

export type Data45 = typeof data45;
