import React from 'react'

class HogTile extends React.Component {
  
  state = {
    name: this.props.name,
    image: this.props.image 
  }

  handleClick = (event) => {
    this.setState({
      ...this.state,
      weight: this.props.weight,
      specialty: this.props.specialty,
      medal: this.props.medal,
      greased: this.props.greased
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>{this.state.name}</h1>
        <img src={this.state.image} alt={this.state.name}/>
        {this.state.weight ? <p>Weight: {this.state.weight}</p> : null}
        {this.state.specialty ? <p>Specialty: {this.state.specialty}</p> : null}
        {this.state.medal ? <p>Highest Medal Achieved: {this.state.medal}</p> : null}
        {this.state.greased ? <p>GREASED</p> : null}
      </div>
    )
  }
}

export default HogTile