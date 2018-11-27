import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<label>Sort By</label>
			<select onChange={props.handleSort}>
				<option value=""></option>
				<option value="name">name</option>
				<option value="weight">weight</option>
			</select>
			<div onChange={props.handleFilter}>
				<input type="radio" name="grease" value="all" />
				<label>All Hoggers </label>
				<input type="radio" name="grease" value="greased" />
				<label>Greased Hoggers </label>
				<input type="radio" name="grease" value="not greased" />
				<label>Un-Greased Hoggers </label>
			</div>
		</div>
	)
} // end Nav function component

export default Nav
