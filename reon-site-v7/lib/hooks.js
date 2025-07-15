'use client'

import { useState, useEffect } from 'react'

// Breakpoint definitions based on common device sizes
const BREAKPOINTS = {
  // Mobile: 320px - 767px (iPhone SE to larger phones)
  mobile: { min: 320, max: 767 },
  // Tablet: 768px - 1023px (iPad, Android tablets)
  tablet: { min: 768, max: 1023 },
  // Laptop: 1024px - 1439px (13", 14", 15.6" laptops)
  laptop: { min: 1024, max: 1439 },
  // Desktop: 1440px+ (24", 27" monitors and larger)
  desktop: { min: 1440, max: Infinity }
}

// Generic hook for checking screen size
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

// Custom hooks for each device type
export function useMobile() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.mobile.min}px) and (max-width: ${BREAKPOINTS.mobile.max}px)`)
}

export function useTablet() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.tablet.min}px) and (max-width: ${BREAKPOINTS.tablet.max}px)`)
}

export function useLaptop() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.laptop.min}px) and (max-width: ${BREAKPOINTS.laptop.max}px)`)
}

export function useDesktop() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.desktop.min}px)`)
}

// Additional utility hooks
export function useIsSmallScreen() {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.tablet.max}px)`)
}

export function useIsLargeScreen() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.laptop.min}px)`)
}

// Hook to get current device type
export function useDeviceType() {
  const isMobile = useMobile()
  const isTablet = useTablet()
  const isLaptop = useLaptop()
  const isDesktop = useDesktop()

  if (isMobile) return 'mobile'
  if (isTablet) return 'tablet'
  if (isLaptop) return 'laptop'
  if (isDesktop) return 'desktop'
  return 'unknown'
}

// Hook for responsive spacing values
export function useResponsiveSpacing() {
  const deviceType = useDeviceType()
  
  const spacing = {
    mobile: {
      container: 'px-4 sm:px-6',
      section: 'py-8 sm:py-12',
      gap: 'gap-4 sm:gap-6',
      text: 'space-y-3 sm:space-y-4',
      notchPadding: 'pt-safe-top', // For notch/punch hole
    },
    tablet: {
      container: 'px-6 md:px-8',
      section: 'py-12 md:py-16',
      gap: 'gap-6 md:gap-8',
      text: 'space-y-4 md:space-y-6',
      notchPadding: 'pt-4',
    },
    laptop: {
      container: 'px-8 lg:px-12 max-w-6xl mx-auto',
      section: 'py-16 lg:py-20',
      gap: 'gap-8 lg:gap-10',
      text: 'space-y-6 lg:space-y-8',
      notchPadding: '',
    },
    desktop: {
      container: 'px-12 xl:px-16 max-w-7xl mx-auto',
      section: 'py-20 xl:py-24',
      gap: 'gap-10 xl:gap-12',
      text: 'space-y-8 xl:space-y-10',
      notchPadding: '',
    }
  }

  return spacing[deviceType] || spacing.laptop
}