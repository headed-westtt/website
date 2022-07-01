export const Card = ({
  description = '',
  imgUrl = '',
  subtitle = '',
  title,
}) => (
  <div className='card'>
    <img src={imgUrl} alt={title} />
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  </div>
)
