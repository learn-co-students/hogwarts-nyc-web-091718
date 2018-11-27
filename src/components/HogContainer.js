import React, {Component} from 'react';
import hogs from '../porkers_data';
import Hog from './Hog';
import Sort from './Sort';

class HogContainer extends Component {

  state = {
    hogData: hogs,
    sortValue: "name",
    isGreased: false
  }

  sortHogs = () => {
    const allHogs = [...this.state.hogData]
    if (this.state.sortValue === "name") {
      return allHogs.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    } else if (this.state.sortValue === "weight") {
      return allHogs.sort((a, b) => {
        return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      })
    }
  }

  hogMapper = () => {
    let sortHogs = this.sortHogs()
    if(this.state.isGreased === false) {
      return sortHogs.map((hog, idx) => {
        return <Hog key={idx}
        data={hog}/>
      })
    } else {
      return sortHogs.map((hog, idx) => {
        if(hog.greased === true) {
          return <Hog key={idx}
          data={hog}/>
        }
      })
    }
  }

  isGreasedHandler = () => {
    this.setState({isGreased: !this.state.isGreased})
  }

  sortHandler = (event) => {
    this.setState({sortValue: event.target.value})
  }

  render() {
    return(
      <fragment>
        < Sort isGreased={this.state.isGreased}
        isGreasedHandler={this.isGreasedHandler}
        sortHandler={this.sortHandler}/><br/>
        <div className="ui link cards">
          {this.hogMapper()}
        </div>
      </fragment>

    )
  }
}

export default HogContainer;
