# TEST-03 — Tests for `calculateTotal`

**Type:** Test · **Level:** Medium

Cover the line-item total calculation:

- One line, quantity 1
- One line, quantity greater than 1
- Several lines
- An empty list

**You'll have to make it testable first.** `calculateTotal` currently lives inside the
`RequestLineTable` component, so it can't be imported. Lift it out — into `utility/`, or
export it — before you can write a line of test. That's part of the ticket, and it's worth
noticing: **testable code looks different from untestable code.**

## Acceptance criteria

- [ ] `calculateTotal` is importable from outside the component
- [ ] Tests live beside the code they test
- [ ] `npm test` passes with the new tests included
- [ ] **The test was seen failing before the fix existed.** Write it first, run it, watch it
      go red, then fix and watch it go green. Say so in the pull request. *(If the fix landed
      first, prove it the hard way: `git stash` the fix, run the test, watch it fail.)*
- [ ] At least one test covers an **edge case the bug report didn't mention** — an empty list,
      a null, a boundary
- [ ] Test names say what is being asserted, not `test1`
