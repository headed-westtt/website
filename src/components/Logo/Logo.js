import { Link } from 'react-router-dom'
import logo from '../../static/westtt-logo.svg'

export const Logo = () => (
  <Link to='/' className='logo'>
    <img src={logo} alt='company logo' />
    <h1>Westtt</h1>
  </Link>
)
