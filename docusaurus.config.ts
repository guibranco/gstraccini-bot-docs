import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GStraccini-bot',
  tagline: 'Automate your GitHub repository tasks with ease',
  favicon: 'img/favicon.ico',

  url: 'https://docs.bot.straccini.com',
  baseUrl: '/',

  organizationName: 'guibranco',
  projectName: 'gstraccini-bot-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/guibranco/gstraccini-bot-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/guibranco/gstraccini-bot-docs/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'GStraccini-bot',
      logo: {
        alt: 'GStraccini-bot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/apps/gstraccini',
          label: 'Install Bot',
          position: 'right',
        },
        {
          href: 'https://github.com/guibranco/gstraccini-bot-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Commands',
              to: '/docs/commands',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub App',
              href: 'https://github.com/apps/gstraccini',
            },
            {
              label: 'GitHub Marketplace',
              href: 'https://github.com/marketplace/gstraccini-bot',
            },
            {
              label: 'Dashboard',
              href: 'https://bot.straccini.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Source Code',
              href: 'https://github.com/guibranco/gstraccini-bot-service',
            },
            {
              label: 'API',
              href: 'https://api.bot.straccini.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GStraccini-bot. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
