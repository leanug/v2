'use client'

import React, {ChangeEvent} from 'react'
import { useState, useRef, useEffect } from 'react'

import { useThemeStore } from '@/store'

export const ThemeController: React.FC = () => {
  const dropdownRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const {theme, setTheme} = useThemeStore()

  const toggleDropdown = (): void => {
    setIsOpen((prev: boolean) => !prev);
  }

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedTheme: string = event.target.value;
    setTheme(selectedTheme);
  };

  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          event.target.closest('[id]')?.id !== 'userAsideMenuButton'
        ) {
          toggleDropdown()
        }
      }

      document.addEventListener('click', handleOutsideClick)

      return () => {
        document.removeEventListener('click', handleOutsideClick)
      }
    }
  }, [isOpen, toggleDropdown])

  return (
    <div className="relataive">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn" onClick={toggleDropdown}>
          Theme
          <svg
            width="12px"
            height="12px"
            className={`h-2 w-2 fill-current opacity-60 inline-block transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>        
        </div>
        <ul
          ref={dropdownRef}
          tabIndex={0} 
          className={`absolute z-[1] top-14 right-0.5 dropdown-content p-3 shadow-2xl bg-base-300 rounded-box ${
            isOpen ? '' : 'hidden'
          }`
        }>
          <li><input onChange={handleThemeChange} checked={theme === 'light'} type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
          <li><input onChange={handleThemeChange} type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
          <li><input onChange={handleThemeChange} type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
          <li><input onChange={handleThemeChange} type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
          <li><input onChange={handleThemeChange} type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
        </ul>
      </div>
    </div>
  )
}