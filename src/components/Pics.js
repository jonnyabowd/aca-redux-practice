import React, { Component } from 'react'

class Pics extends Component {

  render() {
    console.log('PICS ACTION FROM REDUX', this.props.addPicFromRedux)
    return (
      <div style={{ border: '5px dashed pink' }}>
        <p>The gallery {this.props.gallery}</p>
        <p>these are the pics</p>
        <ul>
          {this.props.pics.map((pic, index) => {
            return (
              <li key={index}>{pic}</li>
            )
          })}
        </ul>
        <button onClick={this.props.addPicFromRedux}>Click me</button>
      </div>
    )
  }
}

export default Pics