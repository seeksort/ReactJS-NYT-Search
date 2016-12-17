var React = require('react');

var Saved = React.createClass({
    render: function() {
        return (
            
            <div className="white">
                <h2 className="center-align light-blue darken-3">Saved Articles</h2>
                <div className="row">
                    <div className="col s12">
                        <ul className="collection with-header">
                            <li className="collection-item">
                                <div><span className="article-date">Date Saved: 12/12/12 - </span>Saved Article Title 1<a href="#!" className="secondary-content articles"><i className="material-icons blue-text" title="delete article">delete</i></a>
                                </div>
                            </li>
                            <li className="collection-item">
                                <div><span className="article-date">Date Saved: 12/12/12 - </span>Saved Article Title 2<a href="#!" className="secondary-content articles"><i className="material-icons blue-text" title="delete article">delete</i></a>
                                </div>
                            </li>
                            <li className="collection-item">
                                <div><span className="article-date">Date Saved: 12/12/12 - </span>Saved Article Title 3<a href="#!" className="secondary-content articles"><i className="material-icons blue-text" title="delete article">delete</i></a>
                                </div>
                            </li>
                            <li className="collection-item">
                                <div><span className="article-date">Date Saved: 12/12/12 - </span>Saved Article Title 4<a href="#!" className="secondary-content articles"><i className="material-icons blue-text" title="delete article">delete</i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col s5 offset-s1 center-align">
                        <a class="waves-effect light-blue btn col s12">Back to Search Results</a>
                    </div>
                    <div class="col s5 center-align">
                        <a class="waves-effect light-blue btn col s12">New Search</a>
                    </div>
                    <div class="row"></div>
                </div>
            </div>
        );
    }
});

module.exports = Saved;