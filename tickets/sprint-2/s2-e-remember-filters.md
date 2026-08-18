# S2-E — Remember the filters you set

**Type:** Feature · **depends on S1-C**

Filter the list, open a request, come back — and you're back to an unfiltered list. Remember
what you had.

- Returning to the requests list restores the filters you last used.
- A link that specifies filters explicitly always wins over what was remembered.
- A **Clear filters** control resets them and forgets them.

## Acceptance criteria

- [ ] Set filters, open a request's detail page, navigate back — the filters are still applied
- [ ] Opening `/requests?status=NEW` shows exactly that, **ignoring** what was remembered
- [ ] Opening `/requests` with nothing specified restores the remembered filters
- [ ] **Clear filters** resets the list and clears what was remembered
- [ ] Closing the browser forgets them
- [ ] The restored state is visible in the controls **and** in the URL — never hidden
