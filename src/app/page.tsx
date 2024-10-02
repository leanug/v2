import Image from 'next/image'

import SocialIcon from '@/components/ui/social-icons'
import Card from '@/components/ui/card'
import { siteConfig } from '@/config/site'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-2.5 md:p-24">
      <section className="max-w-3xl text-center">
        <div className="avatar">
          <div className="w-28 rounded-full">
            <Image
              src="/images/leandro-profile.png" // Add the src attribute with the imported image
              alt="Leandro's Profile Picture" // Add the alt attribute for accessibility
              width={162} // Set the width of the image
              height={162} // Set the height of the image
              className="rounded-full" // Add any additional styling classes if needed
            />
          </div>
        </div>

        <div className="mt-4 md:mt-6">
          <span className="text-xl font-medium">
            Hello, my name is Leandro 👋
          </span>
        </div>

        <h1 className="text-2xl md:text-6xl mt-2.5 md:mt-6 font-medium">
          I&apos;m a web developer from Uruguay.
        </h1>
      </section>

      <ul className="px-1 flex items-center gap-4 mt-5 md:mt-8">
        <li>
          <SocialIcon
            kind="github"
            href={siteConfig.socialLinks.github}
            size={6}
          />
        </li>
        <li>
          <SocialIcon
            kind="dribbble"
            href={siteConfig.socialLinks.dribbble}
            size={6}
          />
        </li>
        <li>
          <SocialIcon
            kind="youtube"
            href={siteConfig.socialLinks.youtube}
            size={6}
          />
        </li>
      </ul>

      <section className="flex flex-wrap justify-center flex-row gap-8 mt-10 md:mt-20">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            text={project.text}
            badge={project.badge}
            url={project.url}
            link={project.link}
          />
        ))}
      </section>
    </div>
  )
}
