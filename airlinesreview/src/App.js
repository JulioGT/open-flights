import './App.css';
import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Airlines from "./components/Airlines/Airlines";
import Airline from "./components/Airline/Airline";

function App() {

  

  /*const [ airlines, setAirlines ] = React.useState([]);

  const fetchAirlines = React.useCallback(async () => {
    await axios.get("http://localhost:3000/api/v1/airlines")
    .then(res => {
      setAirlines(res.data.data)
    });
  }, []);

  React.useEffect(()=>{
    fetchAirlines();
  }, [fetchAirlines]);

  const list = React.useCallback(() => airlines.map(item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  }), [airlines])*/

  return (
    <Switch>
      <Route exact path="/" component={Airlines} />
      <Route exact path="/airlines/:slug" component={Airline} />
    </Switch>
  );
}

export default App;
