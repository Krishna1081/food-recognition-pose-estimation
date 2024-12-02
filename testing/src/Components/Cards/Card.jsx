import "../../card.css";
import { useState } from "react";

const Card = ({ image, title, content }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-header">
        <p>{title}</p>
        <button onClick={toggleContent} className="read-more-toggle">
          {showContent ? "Show Less" : "Read More"}
        </button>
      </div>
      {showContent && <div className="card-content">{content}</div>}
    </div>
  );
};

export default Card;
