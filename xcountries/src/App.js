import styles from './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  const performAPIcall = async () => {
    try {
    let response = await axios.get("https://restcountries.com/v3.1/all");
    let data = response.data;
    setCountries(data);
    }
    catch (error) {
      console.error("Error fetching data : ", error);
    }
  };

  useEffect(() => {
    performAPIcall();
  }, []);


  return (
    <div className={styles.containerStyle}>
      {countries.map((country) => {
        return(
        <div key={country.cca3} className={styles.cardStyle}>
          <img
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
            className={styles.imageStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
        );
      })}
      
    </div>
  );
}

export default App;
