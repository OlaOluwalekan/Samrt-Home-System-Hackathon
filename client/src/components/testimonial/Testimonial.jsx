import { testimonies } from './testimonial2'
import './Testimonial.css'
import TestimonyCard from './TestimonyCard'

const Testimonial = () => {
  return (
    <>
      <h2>What do people say about us?</h2>
      <div className='container' id='testimonials'>
        {testimonies.map((testimony) => {
          return <TestimonyCard key={testimony.id} {...testimony} />
        })}
      </div>
    </>
  )
}

export default Testimonial
