const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const {  name , color, _id, Image } = this.props.cup
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={''} cup={this.props.cup}>
      <img src={Image} class= "left"/>
        <p>{capName} that is {color} </p>
        <form method='POST' action={`/cups/${_id}?_method=DELETE`}>
          <input type='submit' value={`Delete ${color} ${name}`} />
          </form>
      </Default>
    )
  }
}

module.exports = Show