import React, { Fragment ,useState,useEffect} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";


const App = () => {

  const [busqueda, guardarBusqueda]= useState({
    ciudad: '',
    pais: '',
    });


const [consultar,guardarConsultar]= useState(false);
const [resultado,guardarResultado]= useState({});
const [error,guardarError]= useState(false)
const { ciudad,pais} = busqueda;

useEffect(()=>{
const consultarAPI = async () => {


if(consultar) {
  const appId ="a57ff30b3cfbc3b1e86ffa3ec24330b1";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
   
 
 const respuesta = await fetch(url);
 const resultado = await respuesta.json();
 
 
guardarResultado(resultado)
guardarConsultar(false);

// Detecta si hubo resultado  correctos en la consulta


if(resultado.cod === "404"){
  guardarError(true);
}else {
  guardarError(false)
}
}








}
consultarAPI();

 // eslint-disable-line

},[consultar]);



let componente;
if(error){

componente= <Error mensaje="No hay resultados"/>


}else{
  componente=  <Clima resultado={resultado}/>
}
  
  return (
    <Fragment>
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
             <Formulario
             busqueda={busqueda}
             guardarBusqueda={guardarBusqueda}
             guardarConsultar={guardarConsultar}
             
             
             
             />
              </div>
            <div className="col m6 s12">
             {componente}
          
              </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;

// English version checked
// import React, { Fragment, useState, useEffect } from "react";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import Weather from "./components/Weather";
// import Error from "./components/Error";

// function App() {
//   // state del formulario
//   const [search, setSearch] = useState({
//     city: "",
//     country: "",
//   });

//   const [fetchData, setFetchData] = useState(false);
//   const [result, setResult] = useState({});
//   const [error, setError] = useState(false);

//   const { city, country } = search;

//   useEffect(() => {
//     const fetchApi = async () => {
//       if (fetchApi) {
//         const appId = "a57ff30b3cfbc3b1e86ffa3ec24330b1";
//         const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

//         const response = await fetch(url);
//         const result = await response.json();

//         setResult(result);
//         setFetchData(false);
//       }

//       // Detecting if there fetch was right

//       if (result.cod === "404") {
//         setError(true);
//       } else {
//         setError(false);
//       }
//     };

//     fetchApi();
//     // eslint-disable-next-line
//   }, [fetchData]);

//   let component;

//   if (error) {
//     component = <Error message="There is not results" />;
//   } else {
//     component = <Weather result={result} />;
//   }

//   return (
//     <Fragment>
//       <Header title="Weather React app" />

//       <div className="container-form">
//         <div className="container">
//           <div className="row">
//             <div className="col m6 s12">
//               <Form
//   search={search}
//   setSearch={setSearch}
//   setFetchData={setFetchData}

//   />
//             </div>
//             <div className="col m6 s12">{component}</div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// export default App;
