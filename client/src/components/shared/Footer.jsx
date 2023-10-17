import { Link } from 'react-router-dom'
import NaviLink from './NaviLink'
import { contactInfo, partners } from './shared-data'

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer className='footer'>
      <div className='footer-center'>
        {/* SUBSCRIBE */}
        <section className='subscribe'>
          <h3>Subscribe to our updates</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email address</label>
            <input type='email' name='email' id='email' />
            <button type='submit'>SUBSCRIBE</button>
          </form>
        </section>

        {/* PARTNERS */}
        <section className='partners'>
          <h3>Our Partners</h3>
          <div>
            {partners.map((partner) => {
              const { id, image, name } = partner
              return (
                <article key={id}>
                  <span>{image}</span>
                  <p>{name}</p>
                </article>
              )
            })}
          </div>
        </section>

        {/* LINKS */}
        <section className='links'>
          <h3>Quick Links</h3>
          <NaviLink path='#' text='Home' />
          <NaviLink path='#about' text='About' />
          <NaviLink path='#testimonials' text='Reviews' />
          <NaviLink path='#download' text='Download app' />
        </section>

        {/* CONTACTS */}
        <section className='contact-us'>
          <h3>Contact Us</h3>
          <div>
            {contactInfo.map((info) => {
              const { id, image, text, link } = info
              return (
                <Link key={id} to={link}>
                  <img src={image} alt={text} />
                  <span>{text}</span>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </footer>
  )
}
export default Footer
