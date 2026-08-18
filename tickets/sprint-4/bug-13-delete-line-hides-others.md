# BUG-13 — Deleting one line item makes all the others disappear

**Reported by:** Dana, purchasing

I deleted one item off my request and everything *else* vanished instead.

**Steps to reproduce**

1. Open a request with three line items
2. Delete the second one
3. Look at the Items table

**Expected:** the item I deleted is gone, the other two remain.
**Actual:** the item I deleted is still listed, and the other two are gone. If I refresh the
page everything comes back correctly — so it seems like it's only the screen that's wrong,
not the data. (The deleted one really is deleted.)
