import React from 'react';

const Total = ({course}) => {
  const total = course
    .map((number) => number.exercises)
    .reduce((acc, value) => acc + value, 0);
  return <p style={{fontWeight: 'bold'}}>total of {total} exercises</p>;
};
export default Total;
