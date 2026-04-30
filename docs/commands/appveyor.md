---
sidebar_position: 3
---

# AppVeyor Commands

Commands for managing [AppVeyor](https://ci.appveyor.com) CI/CD builds.

:::note
All AppVeyor commands require an open pull request. 🔒
:::

---

## `appveyor build`

Runs the AppVeyor build for the target commit and/or pull request.

**Usage:**
```
@gstraccini appveyor build <type>
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `type` | ✅ | Specifies whether to trigger a build for a `commit` or `pull request` |

**Examples:**
```
@gstraccini appveyor build commit
@gstraccini appveyor build pull request
```

---

## `appveyor bump version`

Bumps the CI version in AppVeyor.

**Usage:**
```
@gstraccini appveyor bump version <component>
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `component` | ✅ | The semver component to bump: `major`, `minor`, or `build` |

**Examples:**
```
@gstraccini appveyor bump version major
@gstraccini appveyor bump version minor
@gstraccini appveyor bump version build
```

---

## `appveyor register`

Registers the repository in AppVeyor.

**Usage:**
```
@gstraccini appveyor register
```

---

## `appveyor reset`

Resets the AppVeyor build number for the target repository.

**Usage:**
```
@gstraccini appveyor reset
```
