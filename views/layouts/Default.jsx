const React = require('react')

class Default extends React.Component {
  render () {
    const { cup, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{}</title>
        </head>
        <body>
          <nav>
            <div>
            <a href='/cups'>Home</a>
            </div>
            <div>
            <a href='/cups/new'>Cup</a>
            </div>
            <div>
            {cup ? <a href={`/cups/${cup._id}/edit`}> {cup.name} Edit Page </a> : ''}
            </div>
            <div>
            {cup ? <a href={`/cups/${cup._id}`}>{cup.name} Show Page</a> : ''}
            </div>
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default