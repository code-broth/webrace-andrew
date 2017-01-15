
module.exports = content => `
  <ul>
    ${links(content)}
  </ul>
`

function links(content) {
  let a = ''
  for (var url in content) {
    a += `<li><a href=${url}>${content[url]['name']}</a></li>`
  }
  return a
}
