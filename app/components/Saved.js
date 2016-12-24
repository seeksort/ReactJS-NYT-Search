var React = require('react'),
    helpers = require("./utils/helpers");

var Saved = React.createClass({
    getInitialState: function() {
        return { savedResults: [] }
    },

    componentDidMount: function() {
        helpers.getSaved().then(function(data) {
            console.log(data)
            if (data !== null) {
                this.setState({
                    savedResults: data
                });
                console.log('componentDidMount function has executed')
            }
            else {
                this.setState({
                    savedResults: []
                });
            }
        }.bind(this))
    },

    render: function() {
        var articleComponents = [];
        if (this.state.savedResults !== []) {
            articleComponents = this.state.savedResults.map(function(article, index) {
                    return (<li className="collection-item" key={index}>
                                <div><span className="article-date">Date Saved: {article.date} - </span><a href={article.url}>{article.title}</a><a href="/api/saved" action="DELETE" className="secondary-content articles"><i className="material-icons blue-text" title="delete article">delete</i></a>
                                </div>
                            </li>)
                }.bind(this));
        }

        return (
            
            <div className="white">
                <h2 className="center-align light-blue darken-3">Saved Articles</h2>
                <div className="row">
                    <div className="col s12">
                        <ul className="collection with-header">
                            
                            {articleComponents}

                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col s10 offset-s1 center-align">
                        <a className="waves-effect light-blue btn col s12" href="#/search">New Search</a>
                    </div>
                    <div className="row"></div>
                </div>
            </div>
        );
    }
});

module.exports = Saved;