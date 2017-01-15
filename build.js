const page = require('./src/entry')
const content = require('./content')
const fs = require('fs');

const generate_page = url => page(content, url)

const write_page = url =>
    fs.writeFile(`build/${url}`, generate_page(url), () => {})

fs.mkdir('./build', () => {
    for (const url in content) {
        write_page(url)
    }
    write_page('index')
})
