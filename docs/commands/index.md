---
sidebar_position: 1
---

# Commands Overview

GStraccini-bot supports 30+ commands across multiple categories. Commands are triggered by commenting on a pull request or issue with:

```
@gstraccini <command> [parameters]
```

## Parameter Notation

- `<parameter>` — required parameter
- `[parameter]` — optional parameter

## Badges

Commands in the documentation use the following indicators:

- **🔒 Requires open PR** — can only be used in the context of an open pull request
- **🧪 In development** — experimental feature, may not be fully stable

## Command Categories

| Category | Commands |
|----------|----------|
| [General](./general) | `help`, `review` |
| [AppVeyor](./appveyor) | `appveyor build`, `appveyor bump version`, `appveyor register`, `appveyor reset` |
| [.NET](./dotnet) | `add project`, `bump version`, `csharpier`, `dotnet slnx`, `fix csproj`, `nuget check updates` |
| [Code Quality](./code-quality) | `cargo clippy`, `codacy bypass`, `codacy reanalyze commit`, `codeclimate bypass`, `prettier` |
| [NPM / Node.js](./npm) | `npm check updates`, `npm dist`, `npm lint fix`, `update snapshot` |
| [GitHub](./github) | `change runner`, `copy issue`, `copy labels`, `create labels`, `rerun checks`, `rerun workflows`, `revert commit` |

## Quick Reference

| Command | Category | Requires PR |
|---------|----------|-------------|
| `@gstraccini help` | General | — |
| `@gstraccini review` | General | 🔒 |
| `@gstraccini appveyor build <type>` | AppVeyor | 🔒 |
| `@gstraccini appveyor bump version <component>` | AppVeyor | 🔒 |
| `@gstraccini appveyor register` | AppVeyor | 🔒 |
| `@gstraccini appveyor reset` | AppVeyor | 🔒 |
| `@gstraccini add project <projectPath>` | .NET | 🔒 |
| `@gstraccini bump version <version> [project]` | .NET | 🔒 |
| `@gstraccini csharpier` | .NET | 🔒 |
| `@gstraccini dotnet slnx` | .NET | 🔒 |
| `@gstraccini fix csproj` | .NET | 🔒 |
| `@gstraccini nuget check updates [filter]` | .NET | 🔒 |
| `@gstraccini cargo clippy` | Code Quality | 🔒 |
| `@gstraccini codacy bypass` | Code Quality | 🔒 |
| `@gstraccini codacy reanalyze commit` | Code Quality | 🔒 |
| `@gstraccini codeclimate bypass` | Code Quality | 🔒 |
| `@gstraccini prettier` | Code Quality | 🔒 |
| `@gstraccini npm check updates [filter]` | NPM | 🔒 |
| `@gstraccini npm dist` | NPM | 🔒 |
| `@gstraccini npm lint fix` | NPM | 🔒 |
| `@gstraccini update snapshot` | NPM | 🔒 |
| `@gstraccini change runner <runner> <workflow> [jobs]` | GitHub | 🔒 |
| `@gstraccini copy issue <repository>` | GitHub | — |
| `@gstraccini copy labels <repository>` | GitHub | — |
| `@gstraccini create labels [style] [categories]` | GitHub | — |
| `@gstraccini rerun checks [conclusion]` | GitHub | 🔒 |
| `@gstraccini rerun workflows [conclusion]` | GitHub | 🔒 |
| `@gstraccini revert commit <sha1>` | GitHub | 🔒 |
