import { Card } from '../../components/Card/Card'
import { jakeGrella, laurenPelesky } from '../../static/team'
import lo from '../../static/lauren-headshot.jpeg'
import jake from '../../static/jake-headshot.JPG'

export const Team = () => (
  <div className='page'>
    <Card
      title={jakeGrella.name}
      subtitle={jakeGrella.position}
      description={jakeGrella.bio}
      imgUrl={jake}
    />
    <Card
      title={laurenPelesky.name}
      subtitle={laurenPelesky.position}
      description={laurenPelesky.bio}
      imgUrl={lo}
    />
  </div>
)
