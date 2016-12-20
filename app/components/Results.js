var React = require('react');

var Results = React.createClass({
    render: function() {
        return (
            
            <div className="white">
                <h2 className="center-align light-blue darken-3">Results</h2>
                <div className="row">
                    <div className="col s12">
                        <ul className="collection with-header">
                            <li className="collection-item">
                                <div>{this.props.results}<a href="#!" className="secondary-content articles"><i className="material-icons blue-text" title="save article">save</i></a></div>
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
                <div className="row">
                    <div className="col s5 offset-s1 center-align">
                        <a className="waves-effect light-blue btn col s12" href="#/saved">Saved Articles</a>
                    </div>
                    <div className="col s5 center-align">
                        <a className="waves-effect light-blue btn col s12" href="#/search">New Search</a>
                    </div>
                    <div className="row"></div>
                </div>
            </div>
        )
    }
});

module.exports = Results;