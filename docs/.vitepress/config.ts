import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'XIVAPI SDK',
  description: 'SDK for XIVAPI written in Typescript',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'XIVAPI-SDK',
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/kalosar/xivapi-sdk/tree/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
});

function nav() {
  return [{ text: 'Guide', link: '/guide/introduction' }];
}

function sidebar() {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Getting Started', link: '/guide/getting-started' },
      ],
    },
  ];
}
