var 
    React = require("react"),
    router = require("react-router");

var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute  = Router.IndexRoute;

var 
    Main = require('./../components/Main'),
    Search = require('./../components/Search'),
    Query = require('./../components/Query'),
    Results = require('./../components/Results'),
    Saved = require('./../components/Saved');

module.exports = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>

            <Route path='search' component={Search} >
                <Route path='query' component={Query} />
                <Route path='results' component={Results} />
                
            </Route>

            <Route path='saved' component={Saved} />

            

        </Route>
    </Router>
);