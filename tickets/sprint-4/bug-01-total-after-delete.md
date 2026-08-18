# BUG-01 — Request total is wrong after deleting a line item

**Reported by:** Dana, purchasing

The total on my request doesn't go down when I remove something from it.

**Steps to reproduce**

1. Open a request that has two or more line items
2. Note the total shown on the Requests list
3. Open the request's detail page and delete one line item
4. Go back to the Requests list

**Expected:** the request's total reflects the remaining items.
**Actual:** the total is unchanged. It still includes the deleted item. Adding an item or
editing a quantity updates the total correctly — it's only deleting that doesn't.
