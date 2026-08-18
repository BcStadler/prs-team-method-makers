# BUG-16 — Phone numbers are missing their last digit

**Reported by:** Priya, IT admin

Every phone number on the Users page is one digit short. I've been reading them off to
people and the calls don't connect.

**Steps to reproduce**

1. Open the Users page
2. Compare any phone number against the same user's `Phone` value in the database

**Expected:** `(303) 965-3180`
**Actual:** `(303) 965-318` — the last digit is dropped on every single user.
