const isObject = module.exports = o => {
  return (
        typeof o === 'object' &&
        (o && o.constructor && o.constructor === Object)
  )
}
