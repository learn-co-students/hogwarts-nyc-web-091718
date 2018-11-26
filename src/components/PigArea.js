import React, {Component} from 'react'
import PigTile from'./PigTile'

class PigArea extends Component {

  createHogs = () => {

    if (this.props.greased === true) {
      return this.props.hogs.filter((hogObj) => {
        return hogObj.greased === true
      }).map((hogObj) => {
        return <PigTile
          key={hogObj.name}
          hogObj={hogObj}
        />
      })
    }else{
      return this.props.hogs.map((hogObj)=> {
        return <PigTile
          key={hogObj.name}
          hogObj={hogObj}
        />
      })
    }
  }
  render() {
  	return (
  		<div className= 'ui grid container'>
        {this.createHogs()}
  		</div>
  	)
  }
}
export default PigArea
