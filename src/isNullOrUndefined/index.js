import isNull from '../null'
import isUndefined from '../undefined'

module.exports = o => isNull(o) || isUndefined(o)
