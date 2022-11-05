const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {


  render () {
    const { cups } = this.props
    return (
      <Default title=''>
        <p>The different type of cups. Please select the color.</p> 
        <img src='https://coffeeaffection.com/wp-content/uploads/2019/10/types-of-coffee-cups-02.png'/>
        <div class="flex-container">
              {
                        cups.map((cup) => {
                          const { name, color, _id, image } = cup
                          return (
                            <div key={_id}>
                              <a href={`/cups/${_id}`}> {color}
                              </a> 
                              <br />
                            </div>
                          )
                        })
                    } 
              </div>    
      </Default>
    )
  }
}

module.exports = Index