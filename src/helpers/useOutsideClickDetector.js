import { useEffect } from 'react'
import useStore from '../store/useStore'

export const useOutsideClickDetector = (ref) => {
  const isMenuOpen = useStore((state) => state.isMenuOpen)
  const updateIsMenuOpen = useStore((state) => state.updateIsMenuOpen)

  useEffect(() => {
    // Alert if clicked on outside of element
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && !isMenuOpen) {
        updateIsMenuOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref])
}
