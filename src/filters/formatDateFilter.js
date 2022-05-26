const dayjs = require('dayjs')

const defaultFormat = 'D.M.YY'

function dayjsFilter(date, format = defaultFormat) {
  return dayjs(date).format(format)
}

module.exports = dayjsFilter