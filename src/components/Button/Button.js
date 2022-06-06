import { Link } from 'react-router-dom'

export const Button = ({ children }) => (
  <Link to='/about' className='button'>
    {children}
  </Link>
)
