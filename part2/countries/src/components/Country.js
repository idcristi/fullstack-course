import React from 'react';

const Country = ({country}) => (
  <div>
    <h2>{country.name}</h2>
    <div>Capital: {country.capital}</div>
    <div>Population: {country.population}</div>
    <h3>Languages:</h3>
    <ul>
      {' '}
      {country.languages.map((language) => (
        <li key={language.name}>{language.name}</li>
      ))}{' '}
    </ul>
    <img src={country.flag} alt={`${country.demonym}-flag`} width="150px" />
  </div>
);

export default Country;
