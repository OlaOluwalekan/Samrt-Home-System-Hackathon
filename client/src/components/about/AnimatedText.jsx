import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const qoute = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.8,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};


export default function AnimatedText({ text, colors = [], className = '' }) {

  
  const [ref, inView] = useInView({
    triggerOnce: false, // Set triggerOnce to false to trigger animation on every scroll
    threshold: 0.2, // Adjust this threshold as needed
  });

  return (
    <div ref={ref} className="mx-auto pt-0 py-2 flex items-center overflow-hidden justify-center text-center mt-16">
      <motion.h1
          className={`inline-block w-full  text-[#0f0e0ee6] font-bold capitalize text-2xl md:text-4xl leading-10   ${className}`}
        variants={qoute}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      >
        {text.split(' ').map((word, index) => (
          <motion.span 
          key={word + '-' + index} 
          className="inline-block" 
          variants={singleWord} 
          style={{ color: colors[index % colors?.length] }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
