import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'

import { siteConfig } from '@/config/site'

type HeaderProps = {
  action: ReactNode
}

export const Header: FC<HeaderProps> = ({ action }) => {
  return (
    <header className="navbar py-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Leandro Ubilla
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 flex items-center gap-4">
          <li className="hidden sm:block">
            <a
              target="_blank"
              className="font-semibold text-sm"
              href={siteConfig.links.feedback}
            >
              Feedback
            </a>
          </li>
          <li className="hidden sm:block">
            <Link className="font-semibold text-sm" href="/about">
              About
            </Link>
          </li>
          <li className="hidden sm:block">
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={32} // Customize size here
              />
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href={siteConfig.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                size={32} // Customize size here
              />
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href={siteConfig.socialLinks.dribbble}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble
                size={32} // Customize size here
              />
            </a>
          </li>
          <li>{action}</li>
        </ul>
      </div>
    </header>
  )
}
