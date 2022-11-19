const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {


  render () {
    const { cups } = this.props
    return (
      <Default title=''>
        <p>The different type of cups. Please select the color.</p> 
        <img src='https://coffeeaffection.com/wp-content/uploads/2019/10/types-of-coffee-cups-02.png' class="center"/>
        <div class="flex-container">
              {
                        cups.map((cup) => {
                          const { name, color, _id, Image } = cup
                          return (
                            <div key={_id}>
                              <a href={`/cups/${_id}`}>
                                <img src={Image}/>
                              </a> 
                              <p>{name}</p>
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