import React, {useState} from 'react';

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas'}]);
  const [newName, setNewName] = useState('');

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {name: newName};
    persons.map((person) => person.name).includes(newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(newPerson));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
