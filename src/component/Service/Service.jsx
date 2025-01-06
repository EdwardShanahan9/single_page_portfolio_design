import "./Service.css";

const Service = ({ img, text, color, id }) => {
  return (
    <div style={{ backgroundColor: color }} className={`service service-${id}`}>
      <img src={img} alt={text} />
      <h2>{text}</h2>
    </div>
  );
};

export default Service;
