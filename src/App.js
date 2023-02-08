import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      'monsters': []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>  this.setState({ monsters: users})
    );
  }

  render() {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const filteredMonsters = this.state.monsters.filter((monster) => monster.name.toLowerCase() === event.target.value.toLowerCase());
          this.setState({
            ...this.state,
            monsters: filteredMonsters
          })
        }} />
        {
          this.state.monsters.map((moster) => {
            return <h1 key={moster.name}>{moster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
