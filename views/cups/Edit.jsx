const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, color, image } = this.props.cup
    return (
      <Default title={`${name} Edit Page`} cup={this.props.cup}>
        <form method='POST' action={`/cups/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Color: <input type='text' name='Color' defaultValue={color} /><br />
          Image: <input type='text' name='Image' defaultValue={image} /><br />
          <input type='submit' value='Edit Cup' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit