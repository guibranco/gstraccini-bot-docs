---
sidebar_position: 8
---

# PHP Commands

Commands for managing **PHP** projects.

:::note
All PHP commands require an open pull request. 🔒
:::

---

## `composer update lock`

Updates the `composer.lock` file by running `composer update --no-interaction`. Only applicable to **PHP** projects.

**Usage:**
```
@gstraccini composer update lock
```

---

## `phpcs`

Runs [PHP_CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) to detect violations of a defined coding standard. Only applicable to **PHP** projects.

**Usage:**
```
@gstraccini phpcs [standard]
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `standard` | ❌ | The coding standard to use (e.g., `PSR12`, `PSR2`, `WordPress`). Ignored if a `phpcs.xml` config file exists in the repository. Defaults to `PSR12` |

**Examples:**
```
@gstraccini phpcs
@gstraccini phpcs PSR2
```
