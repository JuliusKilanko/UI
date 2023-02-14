import "./slider.css"
import Slider from 'infinite-react-carousel';
import CatCard from "../catCard/catCard";
import { cards } from "../../data";


const SimpleSlider = () => (
    <div className="container">
    <Slider >
      <div>
      {cards.map((card)=>
        <CatCard 
        key={card.id}
        img={card.img}
        desc ={card.desc}
        title={card.title}
        />
    )}
      </div>
    </Slider>
    </div>
  );

export default SimpleSlider