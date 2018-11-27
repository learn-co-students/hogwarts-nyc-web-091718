import React from 'react';

export default class HogContainer extends React.Component {
  state = {
    clickedHogs: []
  }

  handleClick = (e) => {
    console.log(e.target.alt);
    // if clickedHogs array includes the hog's name, remove it from the clickedHogs names array, else if it's not include then add it to the clickedHogs names array
    this.state.clickedHogs.includes(e.target.alt) ? this.setState({clickedHogs: this.state.clickedHogs.filter(hogName => hogName !== e.target.alt)}, ()=> console.log('remove hog',this.state)) : this.setState({clickedHogs: [...this.state.clickedHogs, e.target.alt]}, ()=>console.log('add hog',this.state))
  }

  render(){
    return (
      <div className="hogContainer ui grid container">
        {this.props.hogs.map((h)=><HogCard key={h.name} hog={h} handleClick={this.handleClick} clickedHogs={this.state.clickedHogs}/>)}
      </div>
    )
  }

} // end HogContainer class

const HogCard = (props) => {
  let imgEnd = props.hog.name.toLowerCase().split(' ').join('_')
  return (
    <div className="hogCard ui eight wide column">
      <img src={require(`../hog-imgs/${imgEnd}.jpg`)} alt={props.hog.name} onClick={props.handleClick}/>
      <h3>{props.hog.name}</h3>
      {props.clickedHogs.includes(props.hog.name) ?
        <div>
        <h5>Specialty: {props.hog.specialty}</h5>
        <h5>Greased: {props.hog.greased.toString()}</h5>
        <h5>Weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h5>
        <h5>Highest Medal: {props.hog['highest medal achieved']}</h5>
        </div>
        :
        null
      }
    </div>
  )
} // end HogCard function component


// EXAMPLE OF DEBUGGING LOGIC IN HogContainer handleClick fn
// handleClick = (e) => {
//   console.log(e.target.alt);
//   console.log("Will I remove? ", this.state.clickedHogs.includes(e.target.alt))
//   this.state.clickedHogs.includes(e.target.alt) ? (()=>{
//     console.log("about to remove")
//     const newHogsState = this.state.clickedHogs.filter(hogName => hogName != e.target.alt)
//     console.log("new hog state will be", newHogsState)
//     this.setState({clickedHogs: newHogsState}, ()=> console.log('remove hog',this.state))
//   })(): this.setState({clickedHogs: [...this.state.clickedHogs, e.target.alt]}, ()=>console.log('add hog',this.state))
// }
