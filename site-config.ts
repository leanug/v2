// config.ts
export const siteConfig = {
  title: 'Leandro Ubilla Gonzalez - Web developer',
  description: `
    Hi, I&apos;m a web developr from Uruguay, 
    i build websites and web apps with Next.js, MongoDB, 
    WordPress and Webflow.`,
  siteUrl: 'https://www.leandroubilla.com',
  links: {
    feedback:
      'https://www.feedbackrealm.com/b/66e10c9404a17cd2185d5202/personal-website'
  },
  socialLinks: {
    github: 'https://www.github.com/leanug',
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
    ogImage: 'https://myawesomeblog.com/og-image.png'
  }
}

export type SiteConfig = typeof siteConfig
