const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title=' '>
        <form method='POST' action='/cups'>
          Name: <input type='text' name='name' placeholder='Name of Cup Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Cup Here' /><br />
          Image: <input type='text' name='image' placeholder='Image of my Cup' /><br />
          <input type='submit' value='Submit Cup' />
        </form>
      </Default>
    )
  }
}

module.exports = New