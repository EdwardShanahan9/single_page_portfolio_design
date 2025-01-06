import "./Servies.css";
import PatternGraphic from "../../assets/img/pattern-graphic-design.svg";
import PatternUI from "../../assets/img/pattern-ui-ux.svg";
import PatternApps from "../../assets/img/pattern-apps.svg";
import PatternIllustrations from "../../assets/img/pattern-illustrations.svg";
import PatternPhotography from "../../assets/img/pattern-photography.svg";
import PatternMotion from "../../assets/img/pattern-motion-graphics.svg";
import Service from "../../component/Service/Service";

const serviceList = [
  {
    color: "#755CDE",
    img: PatternGraphic,
    text: "Graphic Design",
  },
  {
    color: "#F6A560",
    img: PatternUI,
    text: "UI/UX",
  },
  {
    color: "#F39E9E",
    img: PatternApps,
    text: "Apps",
  },
  {
    color: "#EB7565",
    img: PatternIllustrations,
    text: "Illustrations",
  },
  {
    color: "#61C4B7",
    img: PatternPhotography,
    text: "Photography",
  },
  {
    color: "#552049",
    img: PatternMotion,
    text: "Motion Graphics",
  },
];

const Services = () => {
  return (
    <section className="services">
      {serviceList.map((service, index) => (
        <Service
          key={index}
          text={service.text}
          img={service.img}
          color={service.color}
          id={index + 1}
        />
      ))}
    </section>
  );
};

export default Services;
