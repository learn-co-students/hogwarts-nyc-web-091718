import piggy from '../porco.png'
import React, {Component} from 'react'

class Nav extends Component {
	state = ({
		selected: 'default'
	})


		handleSelect = event => {
		  this.setState({
		    selected: event.target.value
		  })
			this.props.handleChange(event.target.value)
		}


	render() {
		return (
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<br/>
					<select onChange={this.handleSelect}>
						<option value='default' name='default'>default</option>
					  <option value='name' name='name'>name</option>
					  <option value='weight' name='weight'>weight</option>
					</select>
				<br/> <input type="checkbox" onClick={this.props.handleChecked} name="greased"  /> Show Greased Only<br/>
			</div>
		)
	}
}

export default Nav
