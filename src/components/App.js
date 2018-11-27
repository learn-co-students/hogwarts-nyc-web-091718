import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigIndex from './PigIndex';

const dupPigs = [...hogs]

class App extends Component {
  constructor(){
    super()
    this.state = {
      allPigs: hogs
    }
  }

  nameWeightFilter = (value) => {
    console.log(value);
    if (value === "name") {
      this.setState({
        allPigs: hogs.sort(function(a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
          return -1;
          }
          if (nameA > nameB) {
          return 1;
          }
          return 0;
        })
      })
    } else if (value === "weight") {
      this.setState({
        allPigs: hogs.sort(function (a, b) {
          return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
        })
      })
    } else {
      this.setState({
        allPigs: dupPigs
      })
    }
  }

  greaseFilter = (value) => {
    console.log(value);
    if (value === "greased") {
      console.log('greased pigs');
      this.setState({
        allPigs: hogs.filter(pig => pig.greased === true)
      })
    } else if (value === "ungreased") {
      console.log('ungreased piggies');
      this.setState({
        allPigs: hogs.filter(pig => pig.greased === false)
      })
    } else {
      console.log('all the pigs');
      this.setState({
        allPigs: dupPigs
      })
    }
  }

  // componentDidMount(){
  //   this.fetchPigs()
  // }
  //
  // fetchPigs = () => {
  //
  // }

  render() {
    return (
      <div className="App">
          <Nav nameWeightFilter={this.nameWeightFilter} greaseFilter={this.greaseFilter} />
          <PigIndex allPigs={this.state.allPigs}/>
      </div>
    )
  }
}

export default App;
