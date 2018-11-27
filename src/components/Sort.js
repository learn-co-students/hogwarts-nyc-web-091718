import React, {Component} from 'react';

const Sort = (props) => {

  return(
    <form>
      <select onChange={props.sortHandler}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select><br/>
      <input type="checkbox" checked={props.isGreased} onClick={props.isGreasedHandler}/> Greased
    </form>
  )

}

export default Sort;
