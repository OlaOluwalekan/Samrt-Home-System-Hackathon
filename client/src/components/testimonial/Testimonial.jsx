import { testimonies } from "./testimonial2";
import "./Testimonial.css"
import TestimonyCard from "./TestimonyCard"
import Ellipse5 from '../../assets/images/Ellipse 5.jpg';
import Ellipse6 from '../../assets/images/Ellipse 6.jpg';
import Ellipse7 from '../../assets/images/Ellipse 7.jpg';
import Ellipse8 from '../../assets/images/Ellipse 8.jpg';



const Testimonial = () =>{
  return (
  // <div>Testimonial</div>
  <div className="container">
      {
        testimonies.map((testimony) => {
    return <TestimonyCard key={testimony.id} {...testimony} />
})
      }
    </div>
  );
}





export default Testimonial;


