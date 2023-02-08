import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsToDisplay, setPlants, plants}) {

  const plantCards = plantsToDisplay.map((plant)=>{
    return <PlantCard key={plant.id} {...plant} setPlants={setPlants} plants={plants} />
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
