import { useState, useEffect } from 'react';
import axios from 'axios';

const apiURL = 'https://ironbnb-m3.herokuapp.com/apartments';

function Apartments() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  //function to call the api and set the state
  const getApartments = async () => {
    try {
      let response = await axios.get(apiURL);
      console.log(response);
      setApartments(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <div>
      <h1>List of apartments</h1>

      {loading && <h2>Loading...</h2>}

      {apartments.map((apt) => {
        return (
          <div key={apt._id}>
            <img src={apt.img} alt="apartment" />
            <h3>{apt.title}</h3>
            <p>Price: {apt.pricePerDay}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Apartments;
