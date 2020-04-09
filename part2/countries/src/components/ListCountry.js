import React from 'react';
import Button from './Button';

const ListCountry = ({countries, updateCountryName}) =>
  countries.map((country) => (
    <div key={country.name}>
      {country.name}
      <Button onClick={() => updateCountryName(country.name)} text="show" />
    </div>
  ));
export default ListCountry;
