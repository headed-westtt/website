import { Card } from '../../components'
import {
  interiorPhotography,
  exteriorPhotography,
  aerialPhotography,
  // videography,
} from '../../static/services'
import interior from '../../static/interior.jpeg'
import exterior from '../../static/exterior.jpeg'
import aerial from '../../static/aerial.jpeg'

export const Services = () => (
  <div className='page'>
    <Card
      title={interiorPhotography.title}
      // description={interiorPhotography.description}
      imgUrl={interior}
    />
    <Card
      title={exteriorPhotography.title}
      // description={exteriorPhotography.description}
      imgUrl={exterior}
    />
    <Card
      title={aerialPhotography.title}
      // description={aerialPhotography.description}
      imgUrl={aerial}
    />
    {/* <Card
      title={videography.title}
      description={videography.description}
      imgUrl={videography.imgUrl}
    /> */}
  </div>
)
