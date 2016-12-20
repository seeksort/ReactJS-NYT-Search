var 
    React = require("react"),
    router = require("react-router");

var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute  = router.IndexRoute;

var 
    Main = require('./../components/Main'),
    Search = require('./../components/Search'),
    Query = require('./../components/Query'),
    Results = require('./../components/Results'),
    Saved = require('./../components/Saved');

// custom creation fn to pass down store as props to every component
var createElement = function (Component, props) {
  return <Component store={store} {...props} />
};


module.exports = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>

            <Route path='search' component={Search} >

                <Route path='/' component={Query} />
                <Route path='results' component={Results} />
                
                <IndexRoute component={Query} />

            </Route>

            <Route path='saved' component={Saved} />

            <IndexRoute component={Search} />

        </Route>
    </Router>
);