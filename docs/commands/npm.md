---
sidebar_position: 6
---

# NPM / Node.js Commands

Commands for managing NPM and Node.js projects.

:::note
All NPM commands require an open pull request. 🔒
:::

---

## `npm check updates`

Updates dependencies in `package.json` and `package-lock.json` using [npm-check-updates](https://github.com/raineorshine/npm-check-updates). Only applicable to **NPM** projects.

**Usage:**
```
@gstraccini npm check updates [filter]
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `filter` | ❌ | Filter to specific packages by name |

**Examples:**
```
@gstraccini npm check updates
@gstraccini npm check updates react
```

---

## `npm dist`

Generates or regenerates the `dist` files by running `npm run package`. Only applicable to **NPM** projects.

**Usage:**
```
@gstraccini npm dist
```

---

## `npm lint fix`

Fixes linting issues by running `npm run lint -- --fix`. Only applicable to **NPM** projects.

**Usage:**
```
@gstraccini npm lint fix
```

---

## `update snapshot`

Updates test snapshots by running `npm test -- -u`. Only applicable to **Node.js** projects.

**Usage:**
```
@gstraccini update snapshot
```
