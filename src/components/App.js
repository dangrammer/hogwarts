import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    filtered: false,
    sortName: false,
    sortWeight: false

  }

  filterGreased = () => {
    this.setState({
      filtered: !this.state.filtered,
      sortName: !this.state.sortName,
      sortWeight: !this.state.sortWeight
    }) 
  }

  handleFilter = (hogs) => {
    return this.state.filtered ? 
      hogs.filter(hog => hog.greased === true) :
         hogs
  }

  sortByName = (hogs) => {
    return this.state.sortName ? 
      hogs.sort((a, b) => (a.name.localeCompare(b.name))) :
         hogs
  }

  sortByWeight = () => {
    console.log(hogs.sort((a, b) => (a.weight - b.weight)))
  }

  render() {
    return (
      <div className="App">
          <Nav 
            filter={this.filterGreased} 
            sortByName={this.sortByName} 
            sortByWeight={this.sortByWeight}
          />
          <HogContainer hogs={this.handleFilter(hogs)}/>
      </div>
    )
  }
}

export default App;


