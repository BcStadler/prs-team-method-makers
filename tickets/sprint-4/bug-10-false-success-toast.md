# BUG-10 — "Successfully saved" appears when the save actually failed

**Reported by:** Dana, purchasing

It told me my line item saved and it wasn't there when I went back.

**Steps to reproduce**

1. Open a request and choose **Add a line**
2. Fill the form in
3. Disconnect from the network (or have the API stopped) and press Save

**Expected:** an error message and nothing claiming success.
**Actual:** a green "Successfully saved." appears, followed by an error message. Two
contradictory messages at once, and the success one is the one you notice.
