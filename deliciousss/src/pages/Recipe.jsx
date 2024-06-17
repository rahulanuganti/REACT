import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
function Recipe() {

  const [details, setDetails] = useState({});
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect( ()=> {
    fetchDetails();
  },[params.name]);

  return (
    <div>
      {details.title}

    </div>
  )
}

export default Recipe