import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    let newPerson = {};
    persons.map((person) => person.name).includes(newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : (newPerson = {name: newName, number: newNumber});
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  };

  const filteredName = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <div>
      <Header name="Phonebook" />
      <Filter value={filterName} onChange={handleFilterName} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />
      <Header name="Numbers" />
      <Persons filter={filteredName} />
    </div>
  );
};

export default App;
