module.exports.HOME = require('./route-names').HOME;
module.exports.COMPONENTS = require('./route-names').COMPONENTS;
module.exports.SIGNIN = require('./route-names').SIGNIN;

const routes = require('./routes');
const { Link, Router } = routes;

module.exports.routes = routes;
module.exports.Link = Link;
module.exports.Router = Router;
