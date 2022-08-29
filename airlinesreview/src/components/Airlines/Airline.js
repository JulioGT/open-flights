import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`

const AirlineLogo = styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      border: 1px solid #efefef;
    }
`

const AirlineName = styled.div`
    padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
      color: #fff;
      background-color: #71b406;
      border: 1px solid #71b406;
      border-radius: 4px;
      padding: 10px 50px;
      width: 100%;
      text-decoration: none;
    }
`

export default function Airline(props) {
  return (
    <Card className='card'>
      <AirlineLogo className='airline-logo'>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </AirlineLogo>
      <AirlineName className='airline-name'>{props.attributes.name}</AirlineName>
      <Rating className='airline-score' score={props.attributes.avg_score}/>
      <LinkWrapper className='airline-link'>
        <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
      </LinkWrapper>
    </Card>
  )
}
