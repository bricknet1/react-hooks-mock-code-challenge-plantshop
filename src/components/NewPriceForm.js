import {useState} from 'react'

function NewPriceForm({plants, setPlants, price, id}){

    const [newPrice, setNewPrice] = useState(price)

    function handleChange(e){
        setNewPrice(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:6001/plants/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"price": newPrice})
          })
          .then(res => res.json())
    }

    return (
        <form className="new-price-form" onSubmit={handleSubmit} >
            <label className="price">Price:</label>
            <input type="number" name="price" step="0.01" placeholder={newPrice} onChange={handleChange} />
            <button type="submit">Submit Change</button>
        </form>
    )
}




export default NewPriceForm