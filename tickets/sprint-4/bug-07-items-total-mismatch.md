# BUG-07 — Items total doesn't match the amounts above it

**Reported by:** Dana, purchasing

The total at the bottom of the items table is less than the amounts added up.

**Steps to reproduce**

1. Open a request detail page with a line item whose quantity is more than 1
2. Add up the Amount column by hand
3. Compare with the total in the table footer

**Expected:** they match.
**Actual:** the footer total is lower. On requests where every quantity is 1 it looks
right, which is why it took a while to notice.
