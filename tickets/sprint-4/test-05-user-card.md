# TEST-05 — Component tests for `UserCard`

**Type:** Test · **Level:** Medium · **Requires React Lesson 19**

Cover what a user actually sees on a user card:

- A user with `IsAdmin` shows `Admin`
- A user with `IsReviewer` shows `Reviewer`
- A user with **neither** flag shows `no role assigned`

That third case is the one to get right — it's the state nobody creates on purpose and the
one most likely to be broken without anyone noticing.

## Acceptance criteria

- [ ] Tests live beside the code they test — `UserCard.test.tsx` next to `UserCard.tsx`
- [ ] `npm test` passes with the new tests included
- [ ] **The test was seen failing before the fix existed.** Write it first, run it, watch it
      go red, then fix and watch it go green. Say so in the pull request. *(If the fix landed
      first, prove it the hard way: `git stash` the fix, run the test, watch it fail.)*
- [ ] At least one test covers an **edge case the bug report didn't mention** — an empty list,
      a null, a boundary
- [ ] Test names say what is being asserted, not `test1` — `shows "no role assigned" when the
      user has neither flag`
