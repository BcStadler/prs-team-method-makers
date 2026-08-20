# PRS — team development block

The Purchase Request System, worked as a team. Three developers, one repository, a backlog
of tickets, and a working agreement.

| Where                             | What                                             |
| --------------------------------- | ------------------------------------------------ |
| `Prs.Api/`                        | ASP.NET Core 8 Web API — EF Core, SQL Server     |
| `Prs.Web/`                        | React + TypeScript front end — Vite, Bootstrap 5 |
| `Prs.Db/populate-prs.sql`         | Seed data                                        |
| `tickets/`                        | The ticket text for all four sprints             |
| `prs-insomnia.json`               | Insomnia collection for the API                  |
| `.github/copilot-instructions.md` | The conventions Copilot is sent on every request |

Both projects live in **one** repository — most tickets change an endpoint _and_ the page
that calls it, which is one branch, one pull request, one review.

---

## Getting it running

You need the **.NET 8 SDK**, **Node 18+**, **SQL Server Express** with **SSMS**, and
**Insomnia**.

**Run every terminal command in this repository from Git Bash**, not PowerShell or Command
Prompt. Right-click the folder in File Explorer → **Show more options** → **Open Git Bash
here** — on Windows 11 the short context menu doesn't list it. Several commands the lessons
have you type don't exist in PowerShell at all.

### 1. Create your local configuration

`appsettings.Development.json` is deliberately **not** in source control — it holds a
connection string, and yours may differ from your teammates'. Create it yourself at
`Prs.Api/appsettings.Development.json`:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "ConnectionStrings": {
    "DevDb": "server=localhost\\sqlexpress;database=PrsTeamProject;trusted_connection=true;trustServerCertificate=true;"
  }
}
```

Adjust the server name if your SQL Server instance isn't `localhost\sqlexpress`.

### 2. Create the database

Open `Prs.Api/Prs.Api.sln` in Visual Studio, then in the **Package Manager Console**
(with `Prs.Api` as the default project):

```
Update-Database
```

`Update-Database` creates `PrsTeamProject` for you — you don't have to make it first.

Then open `Prs.Db/populate-prs.sql` in SSMS and run it. The script starts with
`USE [PrsTeamProject]`, so it targets that database itself rather than whichever one SSMS
happens to have selected. If you name your database something else, change that `USE` line
to match or the seed lands somewhere you didn't intend.

> **This is deliberately not the `PrsDbC40` you used for the capstone.** Keeping them
> separate matters more than it sounds: some tickets in this block have you reproduce
> defects that destroy data, and a couple of them cascade. You want that happening to a
> database you can re-seed, not to your capstone work.

### 3. Run the API

Run `Prs.Api` on the **`http`** profile — not `https`. It listens on
**http://localhost:5555**, which is the URL the React app is configured to call, and it
skips the development certificate setup entirely.

### 4. Run the front end

```bash
cd Prs.Web
npm install
npm run dev
```

Open the URL Vite prints and sign in as **`torrey.schoen`** / **`test1234`**. Every seeded
account uses the same password.

### 5. Run the tests

```bash
cd Prs.Web
npm test
```

Vitest runs in watch mode. Tests live beside the code they test — `formatUtilities.test.ts`
next to `formatUtilities.ts`. There is one example test committed; the rest you write.

### Re-seeding

Some tickets have you change data, and a few defects damage it when you reproduce them.
Re-running `Prs.Db/populate-prs.sql` puts everything back — do it after reproducing
anything destructive, and before verifying your fix.

---

## Tickets and issues

The ticket text ships in this repository, one file per ticket, under `tickets/`. Nobody has
written them into GitHub for you — you do that yourselves, once per sprint:

**Actions** tab → in the **left sidebar** under _All workflows_, click **Create sprint
issues** → **Run workflow** (top right of the blue bar) → pick the sprint → **Run
workflow**.

The workflow name is a link in the left sidebar. The list filling the middle of the page is
_past runs_, not workflows — that's where people go looking first.

One issue is created per file, **unassigned**. Assign them yourselves in sprint planning.

_(If Actions isn't available, open the file in `tickets/sprint-N/` and paste it into a new
issue by hand. Nothing is lost but time.)_

Noticed something that isn't your ticket? **New issue** → **Observation**. Don't fix it on
an unrelated branch — see the charter below.

---

## Team roster

Ben (Neb) Stadler
Michael Vesprani
Nick
## Sprint 1 assignments

| Name | Ticket | What I want to get better at |
| ---- | ------ | ---------------------------- |
| Ben  | 1      | I want to get better at solving git log errors
| Nick | 2      | I want to get better at solving git log errors
| Ben  |1       | I want to get better at solving git log errors
| Nick | 2      | I want to get better at solving git log errors
| Michael | 4      | I want to get better at solving git log errors
---

# Team Charter

The working agreement for the team development block. Everything here exists because a team
that skips it loses a day to something avoidable.

## The rules

**One issue, one branch, one pull request.** Branch names carry the issue number:
`feature/12-vendor-detail-page`, `fix/31-line-delete-total`. If you find yourself fixing a
second thing, that's a second branch.

**Name things so a reviewer doesn't have to open the diff.** Branches are
`type/issue-number-short-slug`; commit messages and pull request titles are written in the
imperative — _"Recalculate request total when a line is deleted,"_ not _"fixed bug."_ Because
we squash-merge, **the pull request title becomes the permanent commit message on `main`** —
so `wip` on your own branch is fine, and a vague pull request title is not. Full guidance:
[Naming: branches and commits](https://craigmckeachie.github.io/academy-resources/reference/git-collaboration-quickstart/#naming-branches-and-commits).

**Nothing reaches `main` without a teammate's approval.** Direct pushes to `main` are
blocked. One approving review from someone who didn't write the code, every time.

**Reviewers rotate.** Don't review the same teammate twice in a row. On a team of three
that's automatic if you pay attention.

**Run the code before you approve it.** If you only read the diff, say so in your review —
that's honest, and it tells the author what they did and didn't get.

**The pull request description is part of the work.** Three things, every time:

- What changed, and `Closes #N`
- How you verified it — specifically
- Where you used AI, and what you changed or rejected in what it gave you

**A fix states the root cause.** "Fixed the total" is not a description — it says what you
touched, not what was wrong. _"The date was parsed in the browser's time zone and rendered
in UTC, so anything after 7pm displayed as the next day"_ is.

**Fix what you were assigned, not what you happen to notice.** You will spot things that look
wrong — an odd colour, a clumsy label, a typo — in code no ticket sent you to. Don't quietly
correct them on an unrelated branch: it puts unexplained changes in a diff your reviewer is
reading for something else, and some of what looks wrong is deliberate. **File it as an issue
instead**, and let it be assigned. Noticing is valuable; the drive-by fix is what isn't.

**One database schema owner per sprint.** Only that person runs `Add-Migration`. Their migration
merges first; everyone else pulls `main` and runs `Update-Database` before continuing.
Parallel migrations against the same model produce a mess that costs half a day and teaches
nothing.

**Start every branch from a fresh `main`.**

```bash
git switch main && git pull origin main && git switch -c feature/12-slug
```

**Stand up for five minutes each morning.** What you finished, what you're on, what's
blocking you. Five minutes, standing, no laptops.

## AI in this block

The [AI use policy](https://craigmckeachie.github.io/academy-resources/reference/ai-policy/)'s
deferred column is **open here.** The capstone is behind you; generation and agent mode are
now on the table, including running agents autonomously in their own worktrees.

What doesn't change:

- **You own every line.** In review you'll be asked to explain any part of your diff. "The
  agent wrote it" is not an answer.
- **Scope an agent to one ticket.** If the diff touches files the issue doesn't name,
  that's a finding to report, not something to quietly keep.
- **The AI-use section of your pull request describes what you _rejected_.** "Used agent
  mode, accepted everything" gets sent back.
- **Convention violations are yours to catch.** Copilot will reach for DTOs, `[Authorize]`,
  a repository pattern, `EntityState.Modified`, Bootstrap `row`/`col` grid classes,
  Bootstrap by CDN, and `import type`. All wrong for this codebase. The
  [Copilot quick-start](https://craigmckeachie.github.io/academy-resources/reference/copilot-quickstart/)
  has the full watch-list.
- **Maintain the shared conventions file.** This repository ships with
  `.github/copilot-instructions.md` — the rules Copilot gets sent on every Chat and agent
  request, for all three of you. When a review catches the same drift twice, the fix is a
  pull request against **that file**, not a third review comment. It's the one piece of this
  block that makes review cheaper instead of just more careful.

The limit on this block isn't how fast anyone can generate code. It's how much code three
people can honestly review. Generate accordingly.

## Definition of done

A ticket isn't finished until every one of these is true:

- [ ] Every acceptance criterion on the issue is met
- [ ] Verified in the running app — and in Insomnia if an endpoint changed
- [ ] Follows the existing conventions: no DTOs, no repository pattern, no `[Authorize]`,
      flexbox utilities only (no `row`/`col`), `_db.Entry(current).CurrentValues.SetValues(updated)`
      for PUT
- [ ] The pull request describes what changed, how it was verified, and where AI was used
- [ ] Approved by a teammate who ran it
- [ ] Squash-merged, branch deleted, `main` pulled

## What we're counting

Everything is visible in GitHub, which is the point — contribution shows up daily rather
than at the end. Per person, across the block:

|                                            | Target                           |
| ------------------------------------------ | -------------------------------- |
| Pull requests authored                     | one per assigned ticket, minimum |
| Pull requests reviewed                     | at least as many as you authored |
| Merge conflicts resolved                   | at least one, hands on keyboard  |
| Defects fixed with a documented root cause | at least one                     |

If you're at zero reviews halfway through, you're not participating — regardless of how
much code you've written.
