import React from "react";
import PropTypes from "prop-types";





const Clima = ({ resultado }) => {

    
  const { name, main } = resultado;

  if (!name) return null;

  // Grados Kelvin
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es:</h2>

        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>

        <p>
          Temperatura Máxima{parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>

        <p>
          Temperatura Minima{parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};
export default Clima;

// import React from "react";

// const Weather = ({ result }) => {
//   // Extracting Value

//   const name = result?.name;
//   const main = result?.main;

//   // Kelvin

//   const kelvin = 273.15;

//   return (
//     <div className="card-planel white col s12">
//       <div className="black-text">
//         <h2>The Weather of {name} is:</h2>
//         <p className="temperature">
//           {parseFloat(main?.temp - kelvin, 10).toFixed(2)}
//           <span>&#x2103;</span>
//         </p>

//         <p>
//           Maximium temperature:
//           {parseFloat(main?.temp_max - kelvin, 10).toFixed(2)}
//           <span>&#x2103;</span>
//         </p>

//         <p>
//           Minimum temperature:
//           {parseFloat(main?.temp_min - kelvin, 10).toFixed(2)}
//           <span>&#x2103;</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Weather;
