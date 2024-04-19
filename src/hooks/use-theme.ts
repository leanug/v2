'use client'

import { useThemeStore } from '@/store'
import { useEffect } from 'react'

const THEME_KEY: string = 'leanug_theme' // Define the key for localStorage

export function useTheme(): void {
  const { theme, setTheme }: { theme: string; setTheme: (value: string) => void } = useThemeStore();

  useEffect((): void => {
    const setupTheme = (): void => {
      // Check for previous localStorage saves
      if (typeof window !== 'undefined' && localStorage) {
        const storedTheme: string = localStorage.getItem(THEME_KEY) ?? 'default';
        setTheme(storedTheme)
      }
    }

    // Call setupTheme function
    setupTheme()
  }, [setTheme])

  // Function to update localStorage when theme value changes
  useEffect((): void => {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(THEME_KEY, theme.toString())
    }
  }, [theme])
}
