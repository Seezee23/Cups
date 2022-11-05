const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {


  render () {
    const { cups } = this.props
    return (
      <Default title=''>
        <div class="flex-container">
              {
                        cups.map((cup) => {
                          const { name, color, _id, image } = cup
                          return (
                            <div key={_id}>
                              <a href={`/cups/${_id}`}>
                                {name}
                              </a> is {color}
                              <br />
                              <form method='POST' action={`/cups/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
                              </form>
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