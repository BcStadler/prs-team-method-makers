# TEST-04 — Tests for `translateStatusToErrorMessage` and `checkStatus`

**Type:** Test · **Level:** Medium

Cover the two error-handling helpers in `Prs.Web/src/utility/fetchUtilities.ts`:

**`translateStatusToErrorMessage`**

- 401
- 403
- 500
- An unmapped status code

**`checkStatus`**

- An ok response passes straight through
- A 404 throws

`checkStatus` is `async` and it throws, so you'll need `await expect(...).rejects.toThrow()`
and a response you build yourself — `new Response("", { status: 404 })`.

## Acceptance criteria

- [ ] Tests live beside the code they test — `fetchUtilities.test.ts` next to
      `fetchUtilities.ts`
- [ ] `npm test` passes with the new tests included
- [ ] **The test was seen failing before the fix existed.** Write it first, run it, watch it
      go red, then fix and watch it go green. Say so in the pull request. *(If the fix landed
      first, prove it the hard way: `git stash` the fix, run the test, watch it fail.)*
- [ ] At least one test covers an **edge case the bug report didn't mention** — an empty list,
      a null, a boundary
- [ ] Test names say what is being asserted, not `test1`
