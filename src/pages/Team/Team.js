import { Card } from '../../components/Card/Card'
import { jakeGrella, laurenPelesky } from '../../static/team'

export const Team = () => (
  <div className='page'>
    <Card
      title={jakeGrella.name}
      subtitle={jakeGrella.position}
      description={jakeGrella.bio}
      imgUrl={jakeGrella.imgUrl}
    />
    <Card
      title={laurenPelesky.name}
      subtitle={laurenPelesky.position}
      description={laurenPelesky.bio}
      imgUrl={laurenPelesky.imgUrl}
    />
  </div>
)
