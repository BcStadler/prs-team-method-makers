# TEST-02 — Tests for `formatPhoneNumber`

**Type:** Test · **Level:** Easy

Cover `formatPhoneNumber` in `Prs.Web/src/utility/formatUtilities.ts`:

- A normal ten-digit number
- `null`
- An empty string
- A number that's too short

## Acceptance criteria

- [ ] Tests live beside the code they test — `formatUtilities.test.ts` next to
      `formatUtilities.ts`
- [ ] `npm test` passes with the new tests included
- [ ] **The test was seen failing before the fix existed.** Write it first, run it, watch it
      go red, then fix and watch it go green. Say so in the pull request. *(If the fix landed
      first, prove it the hard way: `git stash` the fix, run the test, watch it fail.)*
- [ ] At least one test covers an **edge case the bug report didn't mention** — an empty list,
      a null, a boundary
- [ ] Test names say what is being asserted, not `test1` — `returns undefined for an empty
      string`
