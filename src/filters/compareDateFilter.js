const dayjs = require('dayjs')

const currentDate = dayjs().format('YYYY-MM-DD') 

function compareDateFilter(date) {
    return (date >= currentDate)
}

module.exports = compareDateFilter