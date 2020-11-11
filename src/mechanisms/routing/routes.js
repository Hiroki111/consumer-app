const nextRoutes = require('next-routes');
const { HOME, RESTAURANT_LIST, COMPONENTS, SIGNIN } = require('./route-names');

module.exports['default'] = nextRoutes()
  .add(HOME, '/')
  .add(RESTAURANT_LIST, `/${RESTAURANT_LIST}`)
  .add(COMPONENTS, `/${COMPONENTS}`)
  .add(SIGNIN, `/${SIGNIN}`);
module.exports = exports['default'];
