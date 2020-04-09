import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

const API = `https://restcountries.eu/rest/v2/all`;

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState('');

  useEffect(() => {
    axios.get(API).then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <Filter
        value={filterCountry}
        onChange={(event) => setFilterCountry(event.target.value)}
      />
      <Countries
        countries={countries}
        filter={filterCountry}
        setCountryName={(countryName) => setFilterCountry(countryName)}
      />
    </div>
  );
};

export default App;
