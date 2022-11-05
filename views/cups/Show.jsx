const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, _id, Image } = this.props.cup
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} cup={this.props.cup}>
      <img src={Image}/>
        <p>{capName} is {color} </p>
      </Default>
    )
  }
}

module.exports = Show