import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tour, settour] = useState([]);

  const fetchdata = async () => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setloading(false);
      settour(response);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  const deletetour = (id) => {
    const newtour = tour.filter((val) => val.id !== id);
    settour(newtour);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }
  if (tour.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
        </div>
        <button className="btn" onClick={() => fetchdata()}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tour={tour} deletetour={deletetour} />
    </main>
  );
}

export default App;
