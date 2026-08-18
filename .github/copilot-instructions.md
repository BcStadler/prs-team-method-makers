# Project conventions

Purchase Request System. React 18 + TypeScript + Vite front end (`Prs.Web`); ASP.NET Core 8
Web API with EF Core and SQL Server (`Prs.Api`).

Everything below is a decision, not an accident. Several are choices a general-purpose
assistant will reach past by default, which is why they're written down.

## Always

**Front end — `Prs.Web`**

- Fetch through `utility/fetchUtilities` — `fetch(...).then(checkStatus).then(parseJSON)`
- One API module object per entity, in that entity's folder — `VendorAPI.ts`, `RequestAPI.ts`
- Forms with react-hook-form: `useForm`, `register`, `handleSubmit`, async `defaultValues`
- Layout with Bootstrap flexbox utilities — `d-flex`, `flex-wrap`, `gap-*`, `w-50`
- One typed interface per entity (`IVendor`), imported as `import { IVendor }`
- Success and error feedback with react-hot-toast
- Modals opened and closed by React state
- Routing with react-router-dom — nested routes, `Outlet`, `useParams`, `useNavigate`

**API — `Prs.Api`**

- Models used directly in controllers; `PrsDbContext` injected as `_db`
- Actions named `GetAll`, `GetById`, `Create`, `Update`, `Delete`, declared in that order
- PUT is fetch-then-set: `_db.Entry(current).CurrentValues.SetValues(updated)`
- Related data loaded with explicit `Include()` — lazy loading is not configured
- Custom endpoints are `/{resource}/{id}/{verb}` — the id comes before the verb
- Descriptive lambda parameters (`request`, `vendor`), never `x`
- `updatedVendor` for the incoming PUT body, `currentVendor` for the entity fetched from
  the database, `newVendor` for the incoming POST body

**Both**

- Match the file you're in. If a pattern already exists in this codebase, follow it rather
  than introducing a better one.

## Never

- `axios`, or a raw `fetch` inside a component
- Bootstrap `row`/`col` grid classes, or CSS Grid
- A `useState` per form field
- `data-bs-toggle` modals, or `alert()` for feedback
- `import type` for interfaces
- DTOs, a repository layer, `[Authorize]`, JWT, or authentication middleware
- `EntityState.Modified` on an update
- Magic status strings — use `RequestStatus.New`, `RequestStatus.Approved` and friends
- A new dependency in either project, without being asked

## Scope

- Change only the files the ticket names. A diff that reaches further is a finding to
  report, not something to keep quietly.
- Don't reformat, rename, or tidy code you weren't sent to change. Some of what looks wrong
  in this codebase is deliberate.
- Don't change an existing test so that a new change passes.
