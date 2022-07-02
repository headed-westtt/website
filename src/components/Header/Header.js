import { Logo } from '../Logo/Logo'
import { Menu } from '../Menu/Menu'
import { getSubtitle } from '../../helpers'

export const Header = () => {
  const subtitle = getSubtitle()

  return (
    <header className={`header ${subtitle && 'hasSubtitle'}`}>
      <div className='header_main'>
        <Logo />
        <Menu />
      </div>
      {subtitle && <h2 className='subtitle'>{subtitle}</h2>}
    </header>
  )
}
