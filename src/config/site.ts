// config.ts
export const siteConfig = {
  title: 'Leandro Ubilla Gonzalez - Web developer',
  description: `
    Hi, I&apos;m a web developr from Uruguay, 
    i build websites and web apps with Next.js, MongoDB, 
    WordPress and Webflow.`,
  siteUrl: 'https://www.leandroubilla.com',
  links: {
    feedback: 'https://www.feedbackrealm.com/b/leandroubilla'
  },
  socialLinks: {
    github: 'https://www.github.com/leanug',
    youtube: 'https://www.youtube.com/@scriptingpixels',
    dribbble: 'https://www.dribbble.com/leanug'
    /* twitter: 'https://twitter.com/leanug', */
    /* linkedin: 'https://www.linkedin.com/in/', */
  },
  metaTags: {
    keywords: [
      'web development',
      'react',
      'next.js',
      'javascript',
      'webflow',
      'figma'
    ],
    ogImage: 'https://www.leandroubilla.com/og-image.png'
  }
}

export type SiteConfig = typeof siteConfig
