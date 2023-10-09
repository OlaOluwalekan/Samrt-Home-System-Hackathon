import FrameOne from '../../assets/Group-2.jpg'
import './download.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BiLogoPlayStore } from "react-icons/bi"
import { BsApple } from "react-icons/bs"




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
          className=''
          
        >
          {/* First section with text on the left and image on the right */}
          <div className='containers'>
            <div className="download-text">
            <div className='text-sections'>
              
               <div>
                 <p className="text-p">Keep track of all your home appliances and devices from your mobile phone with {' '}
                    <span className="span">Oversee Homes.</span>
                 </p>
               </div>
              <div className="app-icons">
                 <div className="icon-one">
                     < BsApple className="app-icon" /> 
                     <div className="icon-text">
                        <p className="icon-p">Available on 
                        <p className="icon-span">App Store</p></p>
                     </div>
                    
                 </div>
                    
                 <div className="icon-two">
                    < BiLogoPlayStore className="app-icon" /> 
                    <div className="icon-text">
                        <p className="icon-p">Available on 
                        <p className="icon-span">Play Store</p></p>
                     </div>
                 </div>
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
  