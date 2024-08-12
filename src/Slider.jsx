import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/imgCarousel1.png";
import img2 from "./images/imgCarousel2.png";
import img3 from "./images/shampoo.png";
import Carousel from "react-bootstrap/Carousel";
import "./CSS/Slider.css";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={img1} alt="" className="d-block w-90" />
        <Carousel.Caption>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eos culpa maxime quibusdam et, exercitationem tenetur sed hic sit.
            Tempora ex velit repellat vitae perferendis unde tenetur est nam
            reprehenderit?
          </p>
          <h1>Varsha</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={img2} alt="" className="d-block w-90" />
        <Carousel.Caption>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eos culpa maxime quibusdam et, exercitationem tenetur sed hic sit.
            Tempora ex velit repellat vitae perferendis unde tenetur est nam
            reprehenderit?
          </p>
          <h1>Varsha</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" className="d-block w-90" />
        <Carousel.Caption>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eos culpa maxime quibusdam et, exercitationem tenetur sed hic sit.
            Tempora ex velit repellat vitae perferendis unde tenetur est nam
            reprehenderit?
          </p>
          <h1>Varsha</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;
