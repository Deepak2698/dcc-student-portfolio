/** @type {import("pliny/config").PlinyConfig } */
// DevFolio by DeCODE Crafters: a portfolio + blog template for developers.
// Everything a student changes to make it their own lives in /data:
// this file, authors/default.mdx (about + skills), projectsData.ts and blog/.
const siteMetadata = {
  title: 'Aarav Mehta | Full Stack Developer',
  author: 'Aarav Mehta',
  headerTitle: 'Aarav Mehta',
  description:
    'Full stack developer building fast, accessible web apps with React, Node.js and MongoDB. Projects, notes and what I am learning.',
  // Shown in the hero on the home page
  role: 'Full Stack Developer · MERN · Next.js',
  intro:
    'I build web apps end to end, from the database to the pixels. I write about what I learn along the way.',
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Tailwind CSS',
    'Git',
    'Docker',
  ],
  resumeUrl: '', // e.g. '/static/resume.pdf' (put the PDF in public/static)
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dcc-student-portfolio.vercel.app',
  siteRepo: 'https://github.com/Deepak2698/dcc-student-portfolio',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'hello@example.com',
  github: 'https://github.com/Deepak2698',
  linkedin: 'https://www.linkedin.com/in/decode-crafters',
  locale: 'en-IN',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  analytics: {
    // Add an analytics provider here if you want one (see the pliny docs).
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    // Set a provider (buttondown, convertkit, mailchimp…) and its env keys to show a signup form.
    provider: '',
  },
  comments: {
    // giscus comments on posts: fill the NEXT_PUBLIC_GISCUS_* env variables to turn them on.
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
