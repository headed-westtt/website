import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { About, Landing, NotFound, Services, Team } from './pages'
import { Layout } from './components'
import useStore from './state/store'
import { getSubtitle } from './helpers'

export default function App() {
  const location = useLocation()
  const setSubtitle = useStore((state) => state.setSubtitle)

  useEffect(() => {
    setSubtitle(getSubtitle(location))
  }, [location])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='team' element={<Team />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
