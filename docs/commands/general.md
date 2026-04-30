---
sidebar_position: 2
---

# General Commands

General-purpose commands available in any pull request or issue.

---

## `help`

Shows the help message with all available commands.

**Usage:**
```
@gstraccini help
```

The bot will reply with a comment listing every supported command and its parameters.

---

## `review` 🔒

Enables review for the target pull request. Useful when the PR submitter wasn't on the watch list or a webhook failed and the review was not triggered automatically.

**Usage:**
```
@gstraccini review
```

:::note
This command requires an open pull request.
:::
