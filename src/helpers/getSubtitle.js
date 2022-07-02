import { useLocation } from 'react-router-dom'

export const getSubtitle = () => {
  const location = useLocation()
  const subtitle = location.pathname.substring(1)

  return subtitle
    ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1)
    : subtitle
}
