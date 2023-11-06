import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

//How to access component specific "Rating" state outside of the component (eg. a consumer wants to use the rating state to display something as shown in below function)
function Test() {
  //setMovieRating (state external to component) should reflect the changes happening to component-specific-state (rating which internal sate of component)
  //this can be achieved by passing a set-function (onSetRating handler) as a prop
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="purple" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} defaultRating={7} />
    <StarRating
      color="red"
      size={24}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating color="teal" size={60} className="test" defaultRating={3} />
    {/* using the compoent along with the internal state */}
    <Test />
  </React.StrictMode>
);
