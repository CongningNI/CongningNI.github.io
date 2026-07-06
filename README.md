# Congning Ni — Academic Homepage

A static academic homepage designed for GitHub Pages. No build step, server, database, or paid hosting is required.

## Contents

- `index.html` — page structure and prose
- `css/style.css` — visual design and responsive layout
- `js/data.js` — publication, submission, and activity records
- `js/script.js` — rendering, filters, and mobile navigation
- `assets/Congning_Ni_CV.pdf` — public CV download
- `DEPLOY_GITHUB_PAGES.md` — publishing instructions

## Updating the site

Most routine updates only require editing `js/data.js`.

### Change a manuscript status

Find the record in `activeSubmissions`. Update `status`, `date`, `venue`, or `url`. When a paper is accepted:

1. Remove it from `activeSubmissions`.
2. Add it to `publications` with `status: "accepted"`.
3. Add the DOI, publisher page, arXiv, or OpenReview URL when available.

### Double-blind submissions

Only the public-facing title and a generic venue description belong in the public repository. Do not add submission IDs, reviewer correspondence, private PDFs, or confidential review records.

### Update the CV

Replace `assets/Congning_Ni_CV.pdf` while keeping the same filename so the website link does not need to change.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
