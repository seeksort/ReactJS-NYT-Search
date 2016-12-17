var React = require('react');

var Search = React.createClass({
    render: function() {
        {<!-- Search -->}
        <div className="white">
            <h2 className="center-align light-blue darken-3">Search</h2>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input placeholder="enter a topic..." id="topic" type="text" className="validate" />
                            <label for="topic">Topic</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input placeholder="enter a year..." id="start_year" type="text" className="validate" />
                            <label for="start_year">Start Year</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input placeholder="enter a year..." id="end_year" type="text" className="validate" />
                            <label for="end_year">End Year</label>
                        </div>
                    </div>
                    <div className="row">
                        <a className="waves-effect light-blue btn col s10 offset-s1">Submit</a>
                    </div>
                </form>
            </div>
        </div>
        {<!-- Results -->}
        <div className="white">
            <h2 className="center-align light-blue darken-3">Results</h2>
            <div className="row">
                <div className="col s12">
                    <ul className="collection with-header">
                        <li className="collection-item">
                            <div>Article Title 1<a href="#!" className="secondary-content articles"><i className="material-icons blue-text" title="save article">save</i></a></div>
                        </li>
                        <li className="collection-item">
                            <div>Article Title 2<a href="#!" className="secondary-content articles"><i className="material-icons blue-text" title="save article">save</i></a></div>
                        </li>
                        <li className="collection-item">
                            <div>Article Title 3<a href="#!" className="secondary-content articles"><i className="material-icons blue-text" title="save article">save</i></a></div>
                        </li>
                        <li className="collection-item">
                            <div>Article Title 4<a href="#!" className="secondary-content articles"><i className="material-icons blue-text" title="save article">save</i></a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }
});

module.exports = Search;