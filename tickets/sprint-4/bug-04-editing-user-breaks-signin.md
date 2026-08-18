# BUG-04 — Editing a user stops them being able to sign in

**Reported by:** Priya, IT admin

Every time I update someone's phone number they lose access.

**Steps to reproduce**

1. Sign in as `torrey.schoen` / `test1234` to confirm the account works, then sign out
2. Go to Users, edit that user, change **only** the phone number, and save
3. Try to sign in as `torrey.schoen` / `test1234` again

**Expected:** the account still works — the password wasn't touched.
**Actual:** sign-in fails. It happens whichever field I change.
