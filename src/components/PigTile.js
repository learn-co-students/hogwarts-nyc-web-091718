import React, {Component} from 'react'
import PigInfo from './PigInfo'



 class PigTile extends Component {
   url = this.props.hogObj.name.split(' ').join('_').toLowerCase()
   urlStartPoint = require(`../hog-imgs/${this.url}.jpg`)

   state = ({
     toggle: false
   })

   handleClick = (event) => {
     if (this.state.toggle === false) {
       this.setState({
         toggle: true
       })
     }else{
       this.setState({
         toggle: false
       })
     }
   }
   render() {
  	return (
        <div className= 'ui eight wide column'>
          <img onClick={this.handleClick} src={this.urlStartPoint} alt={this.url}/>
          <p>{this.props.hogObj.name}</p>
          {this.state.toggle ? <PigInfo hogObj={this.props.hogObj}/> : null}
        </div>
  	)
  }
}
export default PigTile
