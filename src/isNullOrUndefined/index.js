import isNull from './isNull'
import isUndefined from './isUndefined'

module.exports = o => isNull(o) || isUndefined(o)
