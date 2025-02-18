import React, {useState} from "react";

function NewPlantForm({setPlants, plants}) {

  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(e){
     setNewPlant({...newPlant, [e.target.name]: e.target.value})
  }
 
  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => setPlants([...plants, data]))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={newPlant.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={newPlant.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={newPlant.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
