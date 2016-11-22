import React, { PropTypes } from 'react'

class Card extends React.Component {
  render () {
    return(
      <div>
  {
    ['Alice', 'Emily', 'Kate'].map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>
    )
  }
}

export default Card;
