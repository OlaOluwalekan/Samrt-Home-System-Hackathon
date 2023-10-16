// ContactUs.js
import './contact-layout.css'
import { useState } from 'react';

const ContactUs = () => {

    const initialForm = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const [formState, setFormState] = useState(initialForm)
    const { name, email, subject, message } = formState
    const [buttonMessage, setButtonMessage] = useState("Send Message.")
    const [loading, setIsLoading] = useState(false)
 

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }
    const onchange = (e) => {
        const { name, value } = e.target;

        setFormState({...formState, [name]: value})
    }
  return (
    <div className="contact-container">
      <div className='title'>Get In Touch!</div>
      <div className='sub'>
        Got a question or proposal?  Feel free to reach out.
      </div>
      <div>
        <form onSubmit={onSubmit}>
         <div className="input-row">
          <div className='side'>
              <label htmlFor='name'>
                 Your Name
             </label>
             <input
                type='text'
                placeholder="What's Your Name?"
                name='name'
                required
                value={name}
                onChange={onchange}
                />
            </div>

            <div className='side'>
              <label htmlFor='email'>
                 Your Eamil
             </label>
             <input
                type='email'
                placeholder="What's Your Email?"
                name='email'
                required
                value={email}
                onChange={onchange}
                />
            </div>
            </div>
            <div className='side'>
              <label htmlFor='subject'>
                 Subject
             </label>
             <input
                type='text'
                placeholder="Subject"
                name='subject'
                required
                value={subject}
                onChange={onchange}
                />
            </div>
           

            <div className='textarea'>
              <label htmlFor='name'>
                Message
             </label>
             <textarea
                type='textarea'
                id='message'
                placeholder="Hello ......"
                name='message'
                required
                value={message}
                onChange={onchange}
                />
            </div>
        
          
          <button type='submit'>{loading ? "" : buttonMessage}</button>
        </form>
     </div>
    </div>
  );
};

export default ContactUs;
