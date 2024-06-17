import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async(name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
  }
  useEffect( () => {
    getCuisine(params.type);
  },[params.type]);
  return (
    <Grid>
      {cuisine.map((item) => {
        return(
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}
const Grid = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fit , minmax(20rem, .5fr));
  grid-gap: 2rem;
  margin-left: 10%;
  margin-right: auto;
`;
const Card = styled.div`
  img{
    min-width: 15rem;
    max-width: 24rem;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align:center;
    padding: 1rem;
  }
`;




export default Cuisine;