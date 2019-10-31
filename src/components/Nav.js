import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<button onClick={props.filter}>Toggle Greased</button>
			<button onClick={props.sortByName}>Sort by Name</button>
			<button onClick={props.sortByWeight}>Sort by Weight</button>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav
