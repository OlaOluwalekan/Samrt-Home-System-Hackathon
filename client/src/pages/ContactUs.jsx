// ContactUs.js
import axios from 'axios'
import './contact-layout.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleToast } from '../features/generalSlice'

const ContactUs = () => {
  const initialForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const [formState, setFormState] = useState(initialForm)
  const { name, email, subject, message } = formState
  const [buttonMessage, setButtonMessage] = useState('Send Message.')
  const [loading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `Oversee Homes | Contact Us`
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    // console.log(formState)
    if (!name) {
      console.log('name is required')
      return
    }
    setIsLoading(true)

    try {
      const { data } = await axios.post(
        'https://overseehomes.onrender.com/api/v1/email/contact-us',
        formState
      )
      console.log(data)
      setIsLoading(false)
      dispatch(
        toggleToast({
          state: true,
          message: 'Email sent successfully',
          type: 'success',
        })
      )
      setFormState(initialForm)
      setTimeout(() => {
        dispatch(toggleToast({ state: false, message: '' }))
      }, 2000)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      dispatch(
        toggleToast({
          state: true,
          message: 'Something went wrong...',
          type: 'error',
        })
      )
      setTimeout(() => {
        dispatch(toggleToast({ state: false, message: '' }))
      }, 2000)
    }
  }

  const onchange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  return (
    <div className='contact-container'>
      <div className='title'>Get In Touch!</div>
      <div className='sub'>
        Got a question or proposal? Feel free to reach out.
      </div>
      <div>
        <form className='contact-form' onSubmit={onSubmit}>
          <div className='input-row'>
            <div className='side'>
              <label htmlFor='name'>Your Name</label>
              <input
                type='text'
                placeholder="What's Your Name?"
                name='name'
                id='name'
                required
                value={name}
                onChange={onchange}
              />
            </div>

            <div className='side'>
              <label htmlFor='email'>Your Email</label>
              <input
                type='email'
                placeholder="What's Your Email?"
                name='email'
                id='email'
                required
                value={email}
                onChange={onchange}
              />
            </div>
          </div>
          <div className='side'>
            <label htmlFor='subject'>Subject</label>
            <input
              type='text'
              placeholder='Subject'
              name='subject'
              id='subject'
              required
              value={subject}
              onChange={onchange}
            />
          </div>

          <div className='textarea'>
            <label htmlFor='name'>Message</label>
            <textarea
              type='textarea'
              id='message'
              placeholder='Hello ......'
              name='message'
              required
              value={message}
              onChange={onchange}
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            style={{
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.3 : 1,
            }}
          >
            {loading ? 'loading...' : buttonMessage}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
