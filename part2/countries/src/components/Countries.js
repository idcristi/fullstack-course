import React from 'react';
import Country from './Country';
import ListCountry from './ListCountry';

const Countries = ({countries, filter, setCountryName}) => {
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
  );
  return filteredCountries.length > 10 ? (
    'Too many matches, specify another filter.'
  ) : filteredCountries.length > 1 ? (
    <ListCountry
      countries={filteredCountries}
      updateCountryName={setCountryName}
    />
  ) : filteredCountries.length === 1 ? (
    <Country country={filteredCountries[0]} />
  ) : null;
};

export default Countries;
