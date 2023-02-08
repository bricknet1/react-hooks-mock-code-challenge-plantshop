import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  // const [newPlant, setNewPlant] = useState({})
  const [search, setSearch] = useState('')

  const plantsToDisplay = plants.filter((plant)=> plant.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  },[])

  return (
    <main>
      <NewPlantForm setPlants={setPlants} plants={plants} />
      <Search setSearch={setSearch} />
      <PlantList plantsToDisplay={plantsToDisplay} setPlants={setPlants} plants={plants} />
    </main>
  );
}

export default PlantPage;
