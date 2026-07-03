---
sidebar_position: 2
---

# GitHub Events

GStraccini-bot's [Handler](https://github.com/guibranco/gstraccini-bot-handler) receives every GitHub webhook and queues it by event type. The [Service](https://github.com/guibranco/gstraccini-bot-service) then picks up each queue on a schedule (mostly every minute) and runs the automation described below.

## Summary

| Event | GitHub Trigger | Queue | What the bot does |
|-------|-----------------|-------|--------------------|
| [Branches](#branches) | `create` / `delete` (branch ref) | `branches` | Syncs the `🛠 WIP` label and assignee between a branch and its linked issue |
| [Comments](#comments) | `issue_comment` (created) | `comments` | Parses `@gstraccini` commands and executes them |
| [Issues](#issues) | `issues` (opened, assigned, closed, edited, reopened, deleted) | `issues` | Auto-triage labeling and auto-assignment |
| [Pull Requests](#pull-requests) | `pull_request` (opened, closed, edited, reopened, synchronize) | `pull_requests` | Reviews, labels, auto-merge, branch updates, description/content checks |
| [Pushes](#pushes) | `push` | `pushes` | Marks the pushed commit with a check run |
| [Repositories](#repositories) | `repository` (added to installation) | `repositories` | Creates the repository's default labels |
| [Installations](#installations-and-users) | `installation`, `installation_repositories` | `installations` | Reserved — currently a no-op |
| [Users](#installations-and-users) | `member` | `users` | Reserved — currently a no-op |
| [Signature](#signature) | Webhook signature mismatch | `signature` | Re-registers the webhook secret for the affected repository/organization |

---

## Branches

Triggered when a branch is created or deleted.

For each event, the bot looks up open issues in the repository (via the GitHub GraphQL API) whose linked branch matches the ref that was created or deleted:

- **On `create`** — if the linked issue doesn't already have the `🛠 WIP` label, the bot adds it and assigns the branch creator to the issue (if it has no assignee yet).
- **On `delete`** — if the linked issue has the `🛠 WIP` label, the bot removes it and, if the issue is still open, unassigns the branch creator.

---

## Comments

Triggered on new comments on issues and pull requests (`issue_comment`).

The bot:

1. Ignores its own comments and a set of known automation bots (`github-actions[bot]`, `AppVeyorBot`, `gitauto-ai[bot]`).
2. Verifies the commenter is a collaborator on the repository — otherwise it reacts with 👎 and replies that the user isn't allowed to use the bot (except for `dependabot[bot]`, which is silently ignored).
3. Scans the comment body for any `@gstraccini <command>` pattern from the [command list](./commands) and executes each match, rejecting commands that require an open pull request if the PR is no longer open.
4. Reacts with 👎 and posts an error if no known command was found in the comment.

See [Commands](./commands) for the full list of commands handled here.

---

## Issues

Triggered on issue activity (`opened`, `assigned`, `closed`, `edited`, `reopened`, `deleted`).

- **If the issue is now closed** — removes the `🚦 awaiting triage`, `⏳ awaiting response`, and `🛠 WIP` labels.
- **If the issue already has an assignee** — removes the `🚦 awaiting triage` and `⏳ awaiting response` labels only.
- **Otherwise** (open and unassigned):
  - If the repository is private, or the issue was opened by `pixeebot[bot]`, assigns all repository collaborators to the issue.
  - Adds `🚦 awaiting triage` if the issue author isn't a collaborator.
  - Adds `🤖 bot` if the issue author is a bot account.
  - Adds `🛠️ automation`, `📊 dashboard`, `♻️ code quality`, and `🤖 pixeebot` when the author is `pixeebot[bot]`.

---

## Pull Requests

Triggered on pull request activity (`opened`, `closed`, `edited`, `reopened`, `synchronize`).

**When the pull request is closed:**
- Removes the `🛠 WIP` label from any issue the PR closes.
- Removes the `🚦 awaiting triage`, `⏳ awaiting response`, and `🛠 WIP` labels from the PR itself.
- Triggers a re-review of another open, waiting pull request (prioritizing ones with auto-merge enabled), so the queue keeps moving.

**When the pull request is open**, the bot runs a full automation pass:

- Enables auto-merge (squash) for configured trusted submitters.
- Copies labels from the issue(s) the PR closes, swapping the `🛠 WIP` label from the issue to the PR.
- Updates the branch from its base if it's behind.
- Assigns collaborators if the PR has no assignee.
- Approves the PR automatically if the bot hasn't reviewed it yet.
- Requests reviews from repository collaborators (excluding the PR author) unless the sender is a configured auto-review submitter.
- Adds `🚦 awaiting triage` when the sender isn't a collaborator, removing it again once all required reviewers have reviewed after the latest commit.
- Attempts to resolve merge conflicts by asking Dependabot/Depfu to recreate the PR, and posts a `@depfu merge` comment once Depfu's PR has been reviewed by a collaborator.
- Validates the PR description (applies a template or a default message if missing/too short, and validates checkbox groups) as a check run.
- Scans the PR diff for flagged keywords as a check run.
- Detects dependency file changes and labels the PR with the affected package managers (e.g. `📦 dependencies`).

All of the above steps report their outcome as GitHub check runs on the PR's head commit.

---

## Pushes

Triggered on every `push` event.

Sets a check run (`commit`) on the pushed commit to `in_progress` and then immediately to `succeeded` — a lightweight acknowledgment that the push was received and processed.

---

## Repositories

Triggered when a repository is added to (or already covered by) the bot's installation.

Reads the repository's languages and its bot configuration (label style and categories), then creates the repository's default labels accordingly (see the `create labels` command in [GitHub Commands](./commands/github)).

---

## Installations and Users

The `installation` / `installation_repositories` and `member` events are queued (`installations` and `users` queues), but their handlers are currently no-ops — they're reserved for future functionality and don't perform any action today.

---

## Signature

Not a standard GitHub webhook event — this queue is fed when an incoming webhook's signature doesn't match the configured secret (a sign of webhook misconfiguration). When that happens, the bot re-registers the webhook config (URL and secret) for the affected repository or organization, self-healing the mismatch.
