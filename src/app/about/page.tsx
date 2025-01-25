import React from 'react'

const About: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="max-w-2xl text-lg space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">About</h1>
        <p>
          I started my journey in web development back in 2008 with MySpace,
          creating layouts and building my own website. At the time, I had zero
          visitors because I had no marketing skills and was still learning the
          ropes of design.
        </p>
        <p>
          In 2010, I created a network of Flash game websites that received
          millions of visits, using PHP, MySQL and HTML5. However, everything
          changed in 2012 when Google altered its algorithms, leading me to
          transition to WordPress for theme development and freelance web
          design.
        </p>
        <p>
          As I continued to grow, I learned React and Webflow and began working
          freelance, while also dabbling in a bit of UI design.
        </p>
        <p>
          I run a programming channel on YouTube,{' '}
          <a
            href="https://www.youtube.com/@scriptingpixels"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            @scriptingpixels
          </a>
          , where I share my coding journey and insights. I also have a blog
          where I write about web development and design.
        </p>
      </section>
    </div>
  )
}

export default About
