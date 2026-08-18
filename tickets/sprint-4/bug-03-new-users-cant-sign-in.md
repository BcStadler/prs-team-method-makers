# BUG-03 — New users can't sign in

**Reported by:** Priya, IT admin

I created three accounts this morning and none of them can log in. I've reset the passwords
twice.

**Steps to reproduce**

1. Go to Users and create a user with username `newperson` and password `test1234`
2. Confirm the user appears in the users list
3. Sign out and try to sign in as `newperson` / `test1234`

**Expected:** sign-in succeeds.
**Actual:** sign-in fails. Existing users created before this week sign in fine. Editing the
new user and re-saving the password doesn't help — actually, after editing them once, they
can sign in.
