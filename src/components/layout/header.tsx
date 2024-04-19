import Link from 'next/link';
import React from 'react';

import { Dribbble, Github, ThemeController, Twitter } from '@/components';

export const Header: React.FC = () => {
  return (
    <header className="navbar py-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">Leandro Ubilla</Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 flex items-center gap-4">
          <li className="hidden sm:block">
            <a href="https://dribbble.com/leanug"><Dribbble className="w-8 h-8 fill-current" /></a>
          </li>
          <li className="hidden sm:block">
            <a href="https://twitter.com/leanugram"><Twitter className="w-8 h-8 fill-current" /></a>
          </li>
          <li className="hidden sm:block">
            <a href="https://github.com/leanug"><Github className="w-8 h-8 fill-current" /></a>
          </li>
          <li>
            <ThemeController />
          </li>
        </ul>
      </div>
    </header>
  )
}
