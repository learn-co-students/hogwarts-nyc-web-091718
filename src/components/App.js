import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigArea from './PigArea'
import hogs from '../porkers_data';

class App extends Component {
  state = ({
    pigs: hogs,
    greased: false,
  })

  handleChange = (selector) => {
    console.log(this.state.pigs === hogs)
    let newArray = hogs.slice()
    let newData

    if(selector === 'name') {
      newData = newArray.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } else if (selector ==='weight') {
      newData = newArray.sort((a,b) => (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0));
    } else if (selector === 'default'){
      newData = newArray;
    }

    this.setState({
      pigs: newData
    })
  }

  handleChecked = (event) => {
    if (this.state.greased === false) {
      this.setState({
        greased: true
      })
    }else{
      this.setState({
        greased: false
      })
    }
  }

  render() {
    return (
      <div className="App">
          < Nav handleChange={this.handleChange} handleChecked={this.handleChecked} />
          < PigArea greased={this.state.greased} hogs={this.state.pigs}  />

      </div>
    )
  }
}

export default App;
