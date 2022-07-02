import { Link } from 'react-router-dom'

export const Button = ({ children, onClick = undefined, to = undefined }) =>
  to ? (
    <Link onClick={onClick} to={to} className='button'>
      {children}
    </Link>
  ) : (
    <button type='button' onClick={onClick} to={to} className='button'>
      {children}
    </button>
  )
