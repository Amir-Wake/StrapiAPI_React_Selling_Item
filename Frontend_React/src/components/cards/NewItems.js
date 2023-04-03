//use strapi api to fetch data

import {React,useState,useEffect} from 'react'
import './Cards.css';
import axios from 'axios';


function NewItems() {
  const [visible, setVisible] = useState(6);
  const loadMore = () => {
   setVisible(visible+6); 
  };

  //strapi api
  const [newData,setNewData]=useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  axios
    .get("http://localhost:1337/api/items")
    .then(({ data }) => setNewData(data.data))
    .catch((error) => setError(error));
}, []);
if (error) {
  // Print errors if any
  return <div>An error occured: {error.message}</div>;
}

  return (
  <div className='Card-Container' id='new'>
    <section className='contain'>
        <h1> New Clothes</h1>
     <div className='cards'>
    {

newData.slice(0, visible).map(({ id, attributes }) => {
  if (attributes.type === 'new') {
    return (
      <div key={id} className='card'>
        <img src={attributes.image} alt={id}/>
        <h3 className='card-title'> {attributes.name}</h3>
        <p id='NewClothes' className='card-detail'>£{attributes.price}</p>
      </div>
    );
  }
  // If attributes.type is not an empty string, return null
  return null;
})}
     </div>
     <a className='showAll'  onClick={loadMore}>Show More</a>
    </section>
  </div>
  )
}

export default NewItems;



