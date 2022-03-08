import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, deletetour }) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setreadMore(!readMore)}>
            {readMore ? "showLess" : "readMore"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deletetour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
