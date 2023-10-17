import { useEffect, useState } from 'react'
import hero1 from '../../assets/images/Component 2.png'
import hero2 from '../../assets/images/Component 3.jpg'
import hero3 from '../../assets/images/Component 4.webp'
import './hero.css'

const Hero = () => {
  const [slide, setSlide] = useState(1)
  const [heroImage, setHeroImage] = useState(hero1)
  const [heroText, setHeroText] = useState(
    'Welcome to the Future of Home Automation'
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (slide === 1) {
        setHeroImage(hero2)
        setSlide(2)
        setHeroText('Unlock the Potential of Your Living Space')
      } else if (slide === 2) {
        setHeroImage(hero3)
        setSlide(3)
        setHeroText('Your Home, Your Rules')
      } else {
        setHeroImage(hero1)
        setSlide(1)
        setHeroText('Welcome to the Future of Home Automation')
      }
    }, 3000)

    return () => {
      clearInterval(intervalId)
    }
  }, [slide])

  return (
    <div className='hero'>
      <div className='hero-center'>
        <img src={heroImage} alt='hero' />
        <h2>{heroText}</h2>
      </div>
    </div>
  )
}
export default Hero
