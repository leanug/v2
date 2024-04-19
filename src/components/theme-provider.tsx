'use client'

import { ReactNode } from 'react'

import { useTheme } from '@/hooks'
import { useThemeStore } from '@/store'

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useTheme()
  const { theme } = useThemeStore()
  return <div data-theme={theme}>{children}</div>;
}
