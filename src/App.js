import { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import {SearchBox}  from './components/search-box/search-box.component.jsx';
import './App.css';


const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setMonsters(data))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  }    

  return (
    <div className="App">
      <h1 className="head-title">Monsters Rolodex</h1>
      <SearchBox className="search-box" type="search" placeholder="search monsters" onChange={onSearchChange} />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
