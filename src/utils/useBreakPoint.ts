// hooks/useBreakpoint.ts

import { useEffect, useState } from 'react'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const useBreakpoint = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    width,

    isMobile: width < breakpoints.sm,

    isSmallScreen: width < breakpoints.md,

    isMediumScreen: width >= breakpoints.md && width < breakpoints.lg,

    isLargeScreen: width >= breakpoints.lg,

    isXLScreen: width >= breakpoints.xl,
  }
}

export default useBreakpoint
