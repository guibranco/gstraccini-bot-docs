---
sidebar_position: 7
---

# GitHub Commands

Commands for managing GitHub repository settings, labels, workflows, and more.

---

## `change runner` 🔒 🧪

Changes the [GitHub Actions runner](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners) in a workflow file.

**Usage:**
```
@gstraccini change runner <runner> <workflow> [jobs]
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `runner` | ✅ | The runner name (e.g., `ubuntu-latest`, `windows-latest`) |
| `workflow` | ✅ | The workflow filename (with or without the `.yml`/`.yaml` extension) |
| `jobs` | ❌ | Comma-separated list of jobs to update. Omitting this updates all jobs in the workflow |

**Examples:**
```
@gstraccini change runner ubuntu-latest build
@gstraccini change runner windows-latest ci.yml lint,test
```

:::info
This command is currently in development and may not be fully stable.
:::

---

## `copy issue` 🧪

Copies an issue from the current repository to another.

**Usage:**
```
@gstraccini copy issue <repository>
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `repository` | ✅ | The target repository where the issue will be copied (format: `owner/repo`) |

**Example:**
```
@gstraccini copy issue guibranco/another-repo
```

:::info
This command is currently in development and may not be fully stable.
:::

---

## `copy labels`

Copies labels from another repository into the current one.

**Usage:**
```
@gstraccini copy labels <repository>
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `repository` | ✅ | The source repository to copy labels from (format: `owner/repo`) |

**Example:**
```
@gstraccini copy labels guibranco/gstraccini-bot-service
```

---

## `create labels`

Creates the default labels in the repository.

**Usage:**
```
@gstraccini create labels [style] [categories]
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `style` | ❌ | The label style: `icons` or `text` |
| `categories` | ❌ | Comma-separated list of label categories to create |

**Examples:**
```
@gstraccini create labels
@gstraccini create labels icons
@gstraccini create labels text bug,feature,documentation
```

---

## `rerun checks` 🔒

Reruns the checks in the target pull request matching a specific conclusion.

**Usage:**
```
@gstraccini rerun checks [conclusion]
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `conclusion` | ❌ | Filter checks by conclusion: `success`, `failure`, `neutral`, `cancelled`, `timed_out`, or `action_required`. Omitting this reruns all checks |

**Examples:**
```
@gstraccini rerun checks
@gstraccini rerun checks failure
@gstraccini rerun checks timed_out
```

---

## `rerun workflows` 🔒

Reruns the GitHub Actions workflows in the target pull request. Only applicable for **GitHub Actions**.

**Usage:**
```
@gstraccini rerun workflows [conclusion]
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `conclusion` | ❌ | Filter workflows by conclusion: `success`, `failure`, `neutral`, `cancelled`, `timed_out`, or `action_required`. Omitting this reruns all workflows |

**Examples:**
```
@gstraccini rerun workflows
@gstraccini rerun workflows failure
@gstraccini rerun workflows cancelled
```

---

## `revert commit` 🔒

Reverts a commit using its SHA1. The revert is committed directly into the PR branch.

**Usage:**
```
@gstraccini revert commit <sha1>
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `sha1` | ✅ | The full or short SHA1 of the commit to revert |

**Example:**
```
@gstraccini revert commit a1b2c3d
```
