# AG-3 — Export the requests list to CSV

**Type:** Feature · **Agentic**

Add an **Export CSV** button to the requests list that downloads the currently displayed
requests.

## Acceptance criteria

- [ ] `GET /api/requests/export` returns a CSV file with a sensible filename
- [ ] Columns: id, description, justification, status, total, requested-by name
- [ ] The export respects the active status filter
- [ ] The file opens correctly in Excel, including values containing commas
- [ ] Verified in Insomnia and by downloading from the browser
