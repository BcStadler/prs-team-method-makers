# BUG-02 — Requests for exactly $50 go to review instead of being approved

**Reported by:** Marcus, finance

The rule is that anything $50 or under approves automatically. It's not working at exactly
$50.

**Steps to reproduce**

1. Create a request and add line items totalling exactly $50.00
2. Send it for review
3. Create a second request totalling $49.99 and send it for review

**Expected:** both are automatically approved.
**Actual:** the $49.99 request is approved. The $50.00 request goes to REVIEW and sits in
the queue.
