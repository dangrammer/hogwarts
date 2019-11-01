import React from 'react'
import HogTile from './HogTile'

class HogContainer extends React.Component {

  state = {
    sortBasis: null
  }

  sortName = () => {
    this.setState({
      sortBasis: 'name'
    }) 
  }

  sortWeight = () => {
    this.setState({
      sortBasis: 'weight'
    }) 
  }

  hogsArr = () => {
    let hogs = this.props.hogs
    let basis = this.state.sortBasis

    if (basis === 'name') {
      return hogs.sort((a, b) => (a.name.localeCompare(b.name)))
    } else if (basis === 'weight') {
      return hogs.sort((a, b) => (a.weight - b.weight))
    } else {
      return hogs
    }
  }

  render() {
    return (
      <div>
        <div className="sort-buttons">
      <button onClick={this.sortName}>Sort by Name</button>
			<button onClick={this.sortWeight}>Sort by Weight</button>
      </div>
      <ul className="ui grid container">
        {this.hogsArr().map(hog =>
          <li className="ui eight wide column" key={hog.name}>
            <HogTile 
              name={hog.name} 
              image={hog.image}
              weight={hog.weight}
              specialty={hog.specialty}
              medal={hog['highest medal achieved']}
              greased={hog.greased} 
            />
          </li> 
        )}
      </ul>
      </div>
    )
  }
}

export default HogContainer