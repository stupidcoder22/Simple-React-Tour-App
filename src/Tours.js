import React from "react";
import Tour from "./Tour";
const Tours = ({ tour, deletetour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tour.map((data) => {
          return <Tour key={data.id} {...data} deletetour={deletetour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
