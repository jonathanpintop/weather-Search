import React from "react";

const Weather = ({ result }) => {
  // Extracting Value
  if (!name) return null;
  const { name, main } = result;



  // Kelvin

  const kelvin = 273.15;

  return (
    <div className="card-planel white col s12">
      <div className="black-text">
        <h2>The Weather of {name} is:</h2>
        <p className="temperature">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>





        <p>Maximium  temperature:
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>







        <p>Minimum  temperature:
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>











      </div>
    </div>
  );
};

export default Weather;
