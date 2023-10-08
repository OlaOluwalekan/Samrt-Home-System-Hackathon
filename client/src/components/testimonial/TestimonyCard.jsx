import { FaTwitter } from 'react-icons/fa'

const TestimonyCard = ({ name, text, photo, handle }) => {
  return (
    <div className='grid-item'>
      <p>{text}</p>
      <section className='content'>
        <img src={photo} alt={name} className='image' />
        <article>
          <p>{name}</p>
          <p>@{handle}</p>
        </article>
        <span>
          <FaTwitter />
        </span>
      </section>
    </div>
  )
}

export default TestimonyCard
