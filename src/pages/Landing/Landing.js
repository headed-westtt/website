import { Button } from '../../components'
import pool from '../../static/pool.jpg'

export const Landing = () => (
  <div className='landing'>
    <div className='cta'>
      <h2>Reimagining real estate services</h2>
      <Button>Learn About Us</Button>
    </div>
    <img src={pool} alt='' />
  </div>
)
