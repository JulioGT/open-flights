import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

import Airline from './Airline';


const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

function Airlines() {

  const [ airlines, setAirlines ] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/api/v1/airlines.json")
    .then(resp => setAirlines(resp.data.data))
    .catch( resp => console.log(resp))
  }, [airlines.length]);

  const grid = airlines.map(item => {
    return (
      <Airline 
        key={item.attributes.name} 
        attributes={item.attributes}
      />
    )
  })

  return (
    <Home>
      <Header className='header'>
        <h1>OpenFlights</h1>
        <Subheader className='subheader'>Honest, unbiased airline reviews.</Subheader>
      </Header>
      <Grid className='grid'>
        {grid}
      </Grid>
    </Home>
  )
}

export default Airlines
