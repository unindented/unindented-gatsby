export const isRoot = location => {
  let rootPath = '/'
  if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + '/'
  }
  return location.pathname === rootPath
}
