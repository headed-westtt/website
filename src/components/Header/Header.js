import { useLocation } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import { getSubtitle } from '../../helpers'

export const Header = () => {
  const location = useLocation()
  const subtitle = getSubtitle(location)

  return (
    <header className={`header ${subtitle && 'hasSubtitle'}`}>
      <div className='header_main'>
        <Logo />
        <Button>Menu</Button>
      </div>
      {subtitle && <h2 className='subtitle'>{subtitle}</h2>}
    </header>
  )
}
