import React, {Component} from 'react';

const srcUnifier = (name) => {
  return name.toLowerCase().split(' ').join('_')
}

class Hog extends Component {

  state = {
    hasBeenClicked: false
  }

  hogClickHandler = () => {
    this.setState({hasBeenClicked: !this.state.hasBeenClicked})
  }

  whatToRender = () => {
    if (this.state.hasBeenClicked === false) {
      return(
        <div className="card" onClick={this.hogClickHandler}>
          <div className="image">
            <img src={require(`../hog-imgs/${srcUnifier(this.props.data.name)}.jpg`)}/>
          </div>
          <div className="content">
            <div className="header">{this.props.data.name}</div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="card" onClick={this.hogClickHandler}>
          <div className="content">
            <div className="header">{this.props.data.name}
            </div>
            <div>{this.props.data.specialty}</div>
            <div>{this.props.data.greased}</div>
            <div>{this.props.data['highest medal achieved']}</div>
          </div>
        </div>
      )
    }

  }

  render() {
    return this.whatToRender()
  }
}

export default Hog;
