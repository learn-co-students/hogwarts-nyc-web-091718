import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

	const handleRadio = (event) => {
		props.greaseFilter(event.target.value)
	}

	const handleDropdown = (event) => {
		props.nameWeightFilter(event.target.value)
	}

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				<label>Filter By:</label>
				<select onChange={handleDropdown}>
				  <option value="no filter"></option>
				  <option value="name">Name</option>
				  <option value="weight">Weight</option>
				</select>
				<div onChange={handleRadio}>
					<input type="radio"
			     name="greasy" value="all"/>
			    <label>All Hogs</label>

			    <input type="radio"
			     name="greasy" value="greased" />
			    <label>Greased Hogs</label>

			    <input type="radio" id="contactChoice3"
			     name="greasy" value="ungreased" />
			    <label>Ungreased Hogs</label>
				</div>
			</div>
		</div>
	)
}

export default Nav
