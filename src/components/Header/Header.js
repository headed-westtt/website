import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'

export const Header = () => (
  <header className='header'>
    <div className='header_main'>
      <Logo />
      <Button>Menu</Button>
    </div>
  </header>
)
