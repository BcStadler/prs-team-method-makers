# BUG-06 — Users can approve their own requests

**Reported by:** Marcus, finance

This is an audit problem. I can approve my own purchase requests.

**Steps to reproduce**

1. Sign in as a user who is a reviewer
2. Create a request, add a line item over $50, and send it for review
3. Open that request's detail page

**Expected:** Approve and Reject are disabled on my own request, with the warning message
shown.
**Actual:** they're enabled and they work. On *other people's* requests the buttons are
greyed out and the warning appears — which is backwards from what it should be.
