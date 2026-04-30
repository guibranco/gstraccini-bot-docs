---
sidebar_position: 4
---

# .NET Commands

Commands for managing [.NET](https://dotnet.microsoft.com) projects.

:::note
All .NET commands require an open pull request. 🔒
:::

---

## `add project`

Adds a project to the solution file. Only applicable to **.NET** projects.

**Usage:**
```
@gstraccini add project <projectPath>
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `projectPath` | ✅ | The path to the `.csproj` file to add to the solution |

**Example:**
```
@gstraccini add project src/MyProject/MyProject.csproj
```

---

## `bump version` 🧪

Bumps the [.NET version](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core) in `.csproj` files.

**Usage:**
```
@gstraccini bump version <version> [project]
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `version` | ✅ | The .NET version to set (e.g., `net8.0`, `net9.0`) |
| `project` | ❌ | The `.csproj` file to update. Omitting this runs the command on all `.csproj` files in the repository/branch |

**Examples:**
```
@gstraccini bump version net9.0
@gstraccini bump version net9.0 src/MyProject/MyProject.csproj
```

:::info
This command is currently in development and may not be fully stable.
:::

---

## `csharpier`

Formats C# code using [CSharpier](https://csharpier.com). Only applicable to **.NET** projects.

**Usage:**
```
@gstraccini csharpier
```

---

## `dotnet slnx`

Migrates `.sln` files to the newer `.slnx` format using `dotnet sln migrate`. Only applicable to **.NET** projects.

**Usage:**
```
@gstraccini dotnet slnx
```

---

## `fix csproj` 🧪

Updates the `.csproj` file with the `packages.config` version of [NuGet packages](https://nuget.org). Only applicable to **.NET Framework** projects.

**Usage:**
```
@gstraccini fix csproj
```

:::info
This command is currently in development and may not be fully stable.
:::

---

## `nuget check updates`

Checks for NuGet package updates using [dotnet-outdated](https://github.com/dotnet-outdated/dotnet-outdated). Only applicable to **.NET** projects.

**Usage:**
```
@gstraccini nuget check updates [filter]
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `filter` | ❌ | Filter to specific packages by name |

**Examples:**
```
@gstraccini nuget check updates
@gstraccini nuget check updates Newtonsoft.Json
```
