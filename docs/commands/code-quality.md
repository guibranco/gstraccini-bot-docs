---
sidebar_position: 5
---

# Code Quality Commands

Commands for formatting code and managing code quality tools.

:::note
All code quality commands require an open pull request. 🔒
:::

---

## `cargo clippy`

Formats Rust code using [Cargo Clippy](https://doc.rust-lang.org/clippy/usage.html). Only applicable to **Rust** projects.

**Usage:**
```
@gstraccini cargo clippy
```

---

## `codacy bypass`

Bypasses the [Codacy](https://www.codacy.com) analysis for the target commit and/or pull request.

**Usage:**
```
@gstraccini codacy bypass
```

---

## `codacy reanalyze commit`

Reanalyzes the [Codacy](https://www.codacy.com) last commit in a pull request.

**Usage:**
```
@gstraccini codacy reanalyze commit
```

---

## `codeclimate bypass`

Bypasses the [CodeClimate](https://codeclimate.com) analysis for the target commit and/or pull request.

**Usage:**
```
@gstraccini codeclimate bypass
```

---

## `prettier`

Formats code using [Prettier](https://prettier.io). Works across all supported file types in the repository.

**Usage:**
```
@gstraccini prettier
```
