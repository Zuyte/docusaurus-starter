// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zuyte',
  tagline: 'Dinosaurs are cool',
  url: 'https://zuyte.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://s3.amazonaws.com/polymart.user.profilepictures/animated/large/12747',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zuyte', // Usually your GitHub org/user name.
  projectName: 'sus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Zuyte',
        logo: {
          alt: 'My Site Logo',
          src: 'https://s3.amazonaws.com/polymart.user.profilepictures/animated/large/12747',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/docs/voidless', label: 'Bedwars1058-Voidless', position: 'left'},
          {
            href: 'https://github.com/zuyte',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Polymart',
                href: 'https://polymart.org/user/zuyte.12747',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/Gmb8JAVR6H',
              },
              {
                label: '',
                href: '',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Bedwars1058-Voidless',
                to: '/docs/voidless',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zuyte',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
