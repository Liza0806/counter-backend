const fs = require('fs/promises')
const path = require('path')

const counterPath = path.join(__dirname, 'counter.json')

console.log(__dirname)
const getAll = async () => {
    const data = await fs.readFile(counterPath)
    return JSON.parse(data)
}

module.exports = {
getAll,
}