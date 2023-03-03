import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddApartment() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  //handler functions

  const handleTitle = (e) => setTitle(e.target.value);
  const handlePrice = (e) => setPrice(Number(e.target.value));

  //we turn the function async to use axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newApartment = { title, pricePerDay: price };

    try {
      await axios.post('https://ironbnb-m3.herokuapp.com/apartments', newApartment);

      //redirect using navigate
      //navigate('/');
      alert('Submitted with succes');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />
        <label htmlFor="price">Price</label>
        <input type="number" name="price" placeholder="0" value={price} onChange={handlePrice} />

        <button type="submit">Create apartment</button>
      </form>
    </div>
  );
}

export default AddApartment;
