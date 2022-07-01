import { Card } from '../../components'
import {
  interiorPhotography,
  exteriorPhotography,
  aerialPhotography,
  videography,
} from '../../static/services'

export const Services = () => (
  <div className='page'>
    <Card
      title={interiorPhotography.title}
      description={interiorPhotography.description}
      imgUrl={interiorPhotography.imgUrl}
    />
    <Card
      title={exteriorPhotography.title}
      description={exteriorPhotography.description}
      imgUrl={exteriorPhotography.imgUrl}
    />
    <Card
      title={aerialPhotography.title}
      description={aerialPhotography.description}
      imgUrl={aerialPhotography.imgUrl}
    />
    <Card
      title={videography.title}
      description={videography.description}
      imgUrl={videography.imgUrl}
    />
  </div>
)
