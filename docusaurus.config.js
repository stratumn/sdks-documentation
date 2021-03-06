/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SDKs documentation',
  tagline: 'Your critical processes are reliable, simple and efficient',
  url: 'https://stratumn.github.io',
  baseUrl: '/sdks-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.jpg',
  organizationName: 'stratumn', // Usually your GitHub org/user name.
  projectName: 'sdks-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SDKs documentation',
      logo: {
        alt: 'Stratumn',
        src: 'img/logo.jpg',
      },
      items: [
        {
          to: 'docs/configuration/installation',
          activeBasePath: 'docs/configuration',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/faq/required_version',
          activeBasePath: 'docs/faq',
          label: 'FAQ',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '📡 Installing',
              to: 'docs/configuration/installation',
            },
            {
              label: '🚀 Usage and Getting Started',
              to: 'docs/configuration/usage',
            },
            {
              label: '💾 Handling files',
              to: 'docs/configuration/handling-files',
            },
          ],
        },
        {
          title: 'SDKs',
          items: [
            {
              label: 'JavaScript',
              href: 'https://github.com/stratumn/sdk-js',
            },
            {
              label: 'C#',
              href: 'https://github.com/stratumn/sdk-csharp',
            },
            {
              label: 'Java',
              href: 'https://github.com/stratumn/sdk-java',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stratumn, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
          'https://github.com/stratumn/sdks-documentation/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')]
};
