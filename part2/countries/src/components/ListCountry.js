import React from 'react';

const ListCountry = ({countries}) => countries.map((country) => <div key={country.name}>{country.name}</div>);

export default ListCountry;
