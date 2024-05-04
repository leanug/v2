import Image from "next/image";

import profilePic from '@/assets/images/leandro-profile.png'
import { Dribbble, Github, Card, Twitter } from '@/components'

import { projects } from '@/data/projects'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-2.5 md:p-24">
      <section className="max-w-3xl text-center">
        <div className="avatar">
          <div className="w-28 rounded-full">
          <Image 
            src={profilePic} // Add the src attribute with the imported image
            alt="Leandro's Profile Picture" // Add the alt attribute for accessibility
            width={162} // Set the width of the image
            height={162} // Set the height of the image
            className="rounded-full" // Add any additional styling classes if needed
          />
          </div>
        </div>

        <div className="mt-4 md:mt-6">
          <span className="text-xl">Hello, my name is Leandro 👋</span>
        </div>
          
        <h1 className="text-2xl md:text-6xl mt-2.5 md:mt-6 font-medium">
          I'm a web developer and designer from Uruguay.
        </h1>
      </section>

      <ul className="px-1 flex items-center gap-4 mt-5 md:mt-8">
          <li>
            <a href="https://dribbble.com/leanug"><Dribbble className="w-8 h-8 fill-current" /></a>
          </li>
          <li>
            <a href="https://twitter.com/leanugram"><Twitter className="w-8 h-8 fill-current" /></a>
          </li>
          <li>
            <a href="https://github.com/leanug"><Github className="w-8 h-8 fill-current" /></a>
          </li>
        </ul>

      <section className="flex flex-wrap justify-center flex-row gap-8 mt-10 md:mt-20">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          text={project.text}
          badge={project.badge}
          image={project.image}
          imgAlt={project.imgAlt}
          url={project.url}
          link={project.link}
        />
      ))}
      </section>
    </div>
  )
}
