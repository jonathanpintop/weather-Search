import React,{Fragment,useState,useEffect} from "react";
import Header from './components/Header';
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";




function App() {

  // state del formulario
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

const [fetch,setFetch]= useState(false);
const [result,setResult] = useState({});
const [error,setError]= useState(false);

  const { city, country } = search;


useEffect(()=> {
const fetchApi = async () => {

if(fetchApi) {

  const appId = 'a57ff30b3cfbc3b1e86ffa3ec24330b1';
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

const response = await fetch(url);
const result = await response.json();


setResult(result);
setFetch(false);
}

// Detecting if there fetch was right

if(result.cod === "404") {
  setError(true);
}else{
  setError(false);

}


}

fetchApi()

},[fetch]);

let component;


if(error){
 component = <Error message="There is not results" />
}else {
  component = <Weather
    result={result}

  />
}



  return (
    <Fragment>
<Header

  title='Weather React app'
/>

<div className="contenedor-form"> 
<div className="container">
<div className="row">
<div className="col m6 s12">
  <Form
  search={search}
  setSearch={setSearch}
  fetch={setFetch}
  
  
  />
</div>
<div className="col m6 s12">
  {component}
</div>



</div>
  </div>
</div>


    </Fragment>
    
  );
}

export default App;
