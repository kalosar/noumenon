---
layout: home

hero:
  name: XIVAPI-SDK
  text: Made with Typescript
  tagline: The SDK that simplifies XIVAPI
  image:
    src: /logo.svg
    alt: XIVAPI-SDK
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/kalosar/xivapi-sdk

features:
  - icon: ⚡️
    title: Written in Typescript
    details: We opted in for writing the SDK in typescript. This comes with all the goodies like intellisense.
  - icon: 🖖
    title: Simple yet powerful
    details: XIVAPI can be quite chaotic to work with. Thsi SDK simplifies the api and return clean objects with structured data.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/13850373?v=4',
    name: 'Marius Andresen',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/kalosar' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/marius-andresen/' },
      { icon: 'twitter', link: 'https://twitter.com/kalosar' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/13899123?v=4',
    name: 'Christopher Trotter',
    title: 'Collaborator',
    links: [
      { icon: 'github', link: 'https://github.com/chrisatrotter' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/chrisatrotters/' },
      { icon: 'twitter', link: 'https://twitter.com/chrisatrotter' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>At the moment our core team exist of the two of us. Contributors are welcome.</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
