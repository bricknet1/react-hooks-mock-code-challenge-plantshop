import React, {useState} from "react";
import NewPriceForm from './NewPriceForm';

function PlantCard({name, image, price, setPlants, id, plants}) {
  
  const [inStock, setInStock] = useState(true)

  function handleClick(){
    setInStock(current => !current)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(setPlants(plants.filter(plant => plant.id !== id)))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <NewPriceForm price={price} setPlants={setPlants} plants={plants} id={id} />
      {inStock ? (
        <button className="primary" onClick={handleClick} >In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
      <button className="delete" onClick={handleDelete} >Delete Plant</button>
    </li>
  );
}

export default PlantCard;
