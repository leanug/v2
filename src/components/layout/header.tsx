import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

import { siteConfig } from '@/config/site'
import SocialIcon from '@/components/ui/social-icons'

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
          <li>
            <a
              target="_blank"
              className="btn btn-ghost"
              href={siteConfig.links.feedback}
            >
              Feedback
            </a>
          </li>
          <li className="hidden sm:block">
            <SocialIcon
              kind="github"
              href={siteConfig.socialLinks.github}
              size={6}
            />
          </li>
          <li className="hidden sm:block">
            <SocialIcon
              kind="youtube"
              href={siteConfig.socialLinks.youtube}
              size={6}
            />
          </li>
          <li className="hidden sm:block">
            <SocialIcon
              kind="dribbble"
              href={siteConfig.socialLinks.dribbble}
              size={6}
            />
          </li>
          <li>{action}</li>
        </ul>
      </div>
    </header>
  )
}
