import FrameOne from '../../assets/Group 2.png'
import './download.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BiLogoPlayStore } from 'react-icons/bi'
import { BsApple } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Download = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when the image enters the viewport
  })

  return (
    <>
      <motion.div
        ref={ref} // Attach the ref to the component
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate only when in view
        transition={{ duration: 0.8 }}
        className='download'
      >
        {/* First section with text on the left and image on the right */}
        <div className='download-containers' id='download'>
          <div className='download-text'>
            <div className='text-sections'>
              <div>
                <p className='text-p'>
                  Keep track of all your home appliances and devices from your
                  mobile phone with <span className='span'>Oversee Homes.</span>
                </p>
              </div>
              <div className='app-icons'>
                <Link
                  className='icon-one'
                  to='https://www.figma.com/proto/sLBAwrFpweDiZ3M3TjdlL0/Oversee-Homes?type=design&node-id=6-169&t=g942wnuHgpqCouwo-1&scaling=scale-down&page-id=2%3A67&starting-point-node-id=2%3A68'
                  target='_blank'
                >
                  <BsApple className='app-icon' />
                  <div className='icon-text'>
                    <article className='icon-p'>
                      <span>Available on</span>
                      <span className='icon-span'>App Store</span>
                    </article>
                  </div>
                </Link>

                <Link
                  className='icon-two'
                  to='https://www.figma.com/proto/sLBAwrFpweDiZ3M3TjdlL0/Oversee-Homes?type=design&node-id=6-169&t=g942wnuHgpqCouwo-1&scaling=scale-down&page-id=2%3A67&starting-point-node-id=2%3A68'
                  target='_blank'
                >
                  <BiLogoPlayStore className='app-icon' />
                  <div className='icon-text'>
                    <article className='icon-p'>
                      <span>Available on</span>
                      <span className='icon-span'>Play Store</span>
                    </article>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='image-sections'>
            <img src={FrameOne} alt='Mobile phone with the app name' />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Download
