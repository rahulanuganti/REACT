import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import styled from 'styled-components';

function Recipe() {

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect( ()=> {
    fetchDetails();
    // eslint-disable-next-line
  },[params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>

      <Info>
        <Button className={activeTab === 'instructions'? 'active': ''} onClick={() => setActiveTab('instructions')}>
          Instructions
        </Button>
        <Button className={activeTab === 'ingredients'? 'active': ''} onClick={() => setActiveTab('ingredients')}>
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) =>
              <li key={ingredient.id}>{ingredient.original}</li>
            )}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    width: 25rem;
    margin-bottom: 2rem;
  }
  h3{
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
  li{
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
  ul{
    margin-top: 2rem;
  }
  img{
    width: 25rem;
    border-radius: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid  black;
  margin-right: 1rem;
  font-weight: 600;

`;
const Info = styled.div`
  // display: flex;  
  margin-left: 4rem;
  // align-items: flex-start;
`;



export default Recipe