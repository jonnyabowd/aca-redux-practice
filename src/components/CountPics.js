import React from 'react'
import PeopleContainer from '../containers/PeopleContainer'

const CountPics = (props) => {
  return (
    <div>
      <p>The gallery name is: {props.gallery}</p>
      <p>Total: {props.pics.length}</p>
      <PeopleContainer />
    </div>
  )
}

export default CountPics;