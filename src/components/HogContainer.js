import React from 'react'
import HogTile from './HogTile'

class HogContainer extends React.Component {

  render() {
    return (
      <ul className="ui grid container">
        {this.props.hogs.map(hog =>
          <li className="ui eight wide column" key={hog.name}>
            <HogTile 
              name={hog.name} 
              image={hog.image}
              weight={hog.weight}
              specialty={hog.specialty}
              greased={hog.greased}
              medal={hog['highest medal achieved']}
            />
          </li> 
        )}
      </ul>
    )
  }
}

export default HogContainer