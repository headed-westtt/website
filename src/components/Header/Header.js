import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import useStore from '../../state/store'

export const Header = () => {
  const subtitle = useStore((state) => state.subtitle)

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
