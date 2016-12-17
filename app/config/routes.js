var 
    React = require("react"),
    router = require("react-router");

var Router = router.Router;
var Route = router.Route;
var IndexRoute  = Router.IndexRoute;

var 
    Main = require('./../components/Main'),
    Search = require('./../components/children/Search'),
    Saved = require('./../components/children/Saved');

module.exports = {
    <Route path='/' component={Main}>
        <Route path='search' component={Search} />
        <Route path='saved' component={Saved} />
        <IndexRoute component={Search} />
    </Route>
}