import React from "react";
import { useNavigate } from "react-router-dom";

function Number() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="App">
        <h1>Number</h1>
      </div>
      <button className="okButton" type="button" onClick={handleClick}>
        GO BACK
      </button>
    </>
  );
}

export default Number;
