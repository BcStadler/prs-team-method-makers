# AG-1 — Show product photos on the product cards

**Type:** Feature · **Agentic**

`Product` has a `PhotoPath` property that is never displayed anywhere in the app. Right now
every product's `PhotoPath` is empty, so the visible result of this ticket is a clean
placeholder on every card — but the card must render a real image the moment a `PhotoPath`
is set.

## Acceptance criteria

- [ ] Product cards render the product photo when `PhotoPath` has a value
- [ ] A product with no `PhotoPath` shows a neutral placeholder, not a broken image or a
      gap — this is currently every product, so it's what you'll see
- [ ] Set one product's `PhotoPath` by hand in the database and confirm that card, and only
      that card, shows an image
- [ ] Card layout stays consistent whether a card has a photo or a placeholder
- [ ] Layout uses flexbox utilities — no `row`/`col` grid classes
