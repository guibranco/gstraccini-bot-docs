import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Commands',
      link: {
        type: 'doc',
        id: 'commands/index',
      },
      items: [
        'commands/general',
        'commands/appveyor',
        'commands/dotnet',
        'commands/code-quality',
        'commands/npm',
        'commands/github',
      ],
    },
  ],
};

export default sidebars;
