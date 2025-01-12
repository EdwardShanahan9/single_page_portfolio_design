import Image1 from "../../assets/img/image-slide-1.jpg";
import Image2 from "../../assets/img/image-slide-2.jpg";
import Image3 from "../../assets/img/image-slide-3.jpg";
import Image4 from "../../assets/img/image-slide-4.jpg";
import Image5 from "../../assets/img/image-slide-5.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

const Slideshow = () => {
  return (
    <div>
      {images.map((img, index) => (
        <img src={img} key={index} alt="My work" />
      ))}
    </div>
  );
};

export default Slideshow;
