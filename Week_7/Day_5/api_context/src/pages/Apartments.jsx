import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/theme.context';
import axios from 'axios';

function Apartments() {
  const [apartments, setApartments] = useState([]);

  const { theme } = useContext(ThemeContext);

  const getApartments = async () => {
    try {
      let response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments');

      setApartments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <div className={theme}>
      <h3>List of apartments</h3>

      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}

export default Apartments;
