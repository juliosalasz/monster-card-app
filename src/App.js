import React, { Component } from "react";
import Cardlist from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box.components";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="Title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }
}
/* Nuevo cambio 3 */

/*<input
          type="search"
          placeholder="search monsters"
          onChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        /> */
/* render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          onChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        />
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }*/

export default App;
