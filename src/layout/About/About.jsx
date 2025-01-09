import "./About.css";
import AboutImage from "../../assets/img/image-amy.webp";
import Button from "../../component/Button/Button";

const About = () => {
  return (
    <section className="about">
      <img src={AboutImage} alt="Profile Image" />

      <div className="about__text">
        <h2>I’m Amy, and I’d love to work on your next project</h2>

        <p>
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>

        <Button text="Free Consultation" colorTheme="light" />
      </div>
    </section>
  );
};

export default About;
