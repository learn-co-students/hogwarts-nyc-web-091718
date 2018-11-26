import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer.js'
import FilterSearch from './FilterSearch.js'


let pigweight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'


class App extends Component {
  state = {
    hogs: hogs,
    hideGrease: false
  }

  sortByName = () => this.setState({hogs: this.state.hogs.sort( (hog1, hog2) => hog1.name.localeCompare(hog2.name))})


  sortByWeight = () => this.setState({hogs: this.state.hogs.sort( (hog1, hog2) => hog1[pigweight] - hog2[pigweight])})

  hideGreasedPigs = () => this.setState({hideGrease: !this.state.hideGrease})

  render() {
    return (
      <div className="App">
          < Nav />
          <FilterSearch sortByName={this.sortByName} sortByWeight={this.sortByWeight} hideGrease={this.hideGreasedPigs}/>
          <PigContainer hogs={this.state.hogs} hideGrease={this.state.hideGrease}/>
      </div>
    )
  }
}

export default App;
