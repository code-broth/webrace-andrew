
const nav = require('./nav')
const display = require('./display')
const list = require('./list')

const page = body => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Projects Listing</title>
  </head>
  <body>
    ${body}
  </body>
</html>
`

module.exports = (content, url) => page(
  (url === 'index' ?
    list(content) :
    nav(content) + display(content[url])
  )
)
