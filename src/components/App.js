import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {
  state = {
    hogs: hogs
  }

  handleSort = (e) => {
    console.log('in handleSort',e.target.value);
    let hogsCopy = [...hogs];
    switch (e.target.value) {
      case 'name':
        hogsCopy.sort((a,b)=> a.name.localeCompare(b.name))
        this.setState({hogs: hogsCopy}, ()=>console.log(this.state))
        break;
      case 'weight':
        hogsCopy.sort((a,b)=> a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
        this.setState({hogs: hogsCopy}, ()=>console.log(this.state))
        break;
    }
  }

  handleFilter = (e) => {
    console.log('in handleFilter', e.target.value);
    switch (e.target.value) {
      case 'all':
      this.setState({hogs: hogs}, ()=>console.log(this.state))
        break;
      case 'greased':
      this.setState({hogs: hogs.filter(h => h.greased === true)},()=>console.log(this.state))
      break;
      case 'not greased':
      this.setState({hogs: hogs.filter(h => h.greased === false)},()=>console.log(this.state))
      break;
    }
  } // end handleFilter fn

  render() {
    return (
      <div className="App">
          < Nav hogs={hogs} handleSort={this.handleSort} handleFilter={this.handleFilter}/>
          < HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
