# BUG-09 — Deleting a vendor deleted all of its products

**Reported by:** Sam, procurement

I removed a vendor we no longer buy from and it took all of their products with it. Those
products were on historical requests.

**Steps to reproduce**

1. Open Products and note how many products belong to a given vendor
2. Go to Vendors and delete that vendor
3. Go back to Products

**Expected:** the vendor is removed, or I'm told I can't remove it while products reference
it.
**Actual:** the vendor and every one of its products are gone, with no warning.
