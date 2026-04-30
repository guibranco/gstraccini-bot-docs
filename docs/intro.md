---
sidebar_position: 1
---

# Introduction

**GStraccini-bot** is a GitHub bot designed to keep your repository organized and healthy by automating tasks like managing pull requests, issues, comments, and commits — so you can focus on solving real problems.

## How It Works

GStraccini-bot listens to GitHub webhooks and responds to commands posted in pull request and issue comments. To trigger a command, mention `@gstraccini` followed by the command name and any required parameters.

```
@gstraccini <command> [parameters]
```

For example, to format your code with Prettier:

```
@gstraccini prettier
```

Run `@gstraccini help` in any PR or issue to see the full list of available commands.

:::note
If you are not allowed to use the bot, a 👎 reaction will be added to your comment.
:::

## Installation

1. Visit the [GitHub App page](https://github.com/apps/gstraccini)
2. Click **Install**
3. Choose the account or organization, then select **All repositories** or specific ones

Once installed, GStraccini-bot will start processing your repository's events automatically.

## Architecture

GStraccini-bot is made up of several components:

| Component | Description |
|-----------|-------------|
| [API](https://github.com/guibranco/gstraccini-bot-api) | Stats and configuration endpoints |
| [Handler](https://github.com/guibranco/gstraccini-bot-handler) | Handles incoming GitHub webhooks |
| [Service](https://github.com/guibranco/gstraccini-bot-service) | The main worker that processes tasks |
| [Website](https://github.com/guibranco/gstraccini-bot-website) | Landing page and dashboard |
| [Workflows](https://github.com/guibranco/gstraccini-bot-workflows) | GitHub Actions execution |

## Cronjobs

GStraccini-bot runs automated tasks every minute on its infrastructure, processing branches, comments, issues, pull requests, pushes, and repository events to keep everything up to date.

## Useful Links

- [GitHub App](https://github.com/apps/gstraccini)
- [GitHub Marketplace](https://github.com/marketplace/gstraccini-bot)
- [Dashboard](https://bot.straccini.com)
- [Source Code](https://github.com/guibranco/gstraccini-bot-service)
- [API](https://api.bot.straccini.com)
