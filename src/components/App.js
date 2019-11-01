import React, {Component} from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    filtered: false
  }

  filterGreased = () => {
    this.setState({
      filtered: !this.state.filtered
    }) 
  }

  handleFilter = (hogs) => {
    return this.state.filtered ? 
      hogs.filter(hog => hog.greased) :
         hogs
  }

  render() {
    return (
      <div className="App">
        <Nav 
          filter={this.filterGreased} 
          filtered={this.state.filtered}
        />
        <HogContainer hogs={this.handleFilter(hogs)}/>
      </div>
    )
  }
}

export default App