import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { Cross } from 'akar-icons'
import useStore from '../../store/useStore'
import { Button } from '../Button/Button'
import { useOutsideClickDetector } from '../../helpers'

export const Menu = () => {
  const isMenuOpen = useStore((state) => state.isMenuOpen)
  const updateIsMenuOpen = useStore((state) => state.updateIsMenuOpen)
  const wrapperRef = useRef(null)
  useOutsideClickDetector(wrapperRef)

  return (
    <div className='menu' ref={wrapperRef}>
      <Button onClick={() => updateIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <Cross /> : 'Menu'}
      </Button>
      {isMenuOpen && (
        <div className='menu_links'>
          <Link to='services' onClick={() => updateIsMenuOpen(false)}>
            Services
          </Link>
          <Link to='about' onClick={() => updateIsMenuOpen(false)}>
            About
          </Link>
          <Link to='team' onClick={() => updateIsMenuOpen(false)}>
            Team
          </Link>
        </div>
      )}
    </div>
  )
}
