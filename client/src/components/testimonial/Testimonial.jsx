import { testimonies } from './testimonial2'
import './Testimonial.css'
import TestimonyCard from './TestimonyCard'

const Testimonial = () => {
  return (
    <div>
      <h2 className='testimonial-head' id='testimonials'>
        What do people say about us?
      </h2>
      <div className='testimonial-container'>
        {testimonies.map((testimony) => {
          return <TestimonyCard key={testimony.id} {...testimony} />
        })}
      </div>
    </div>
  )
}

export default Testimonial
