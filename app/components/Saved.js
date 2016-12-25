var React = require('react'),
    helpers = require("./utils/helpers");

var Saved = React.createClass({
    getInitialState: function() {
        return { savedResults: [] }
    },

    componentDidMount: function() {
        helpers.getSaved().then(function(data) {
            if (data !== null) {
                this.setState({
                    savedResults: data
                });
            }
            else {
                this.setState({
                    savedResults: []
                });
            }
        }.bind(this))
    },

    // DELETE saved article
    handleDelete: function(event) {
        event.preventDefault();
        helpers.deleteArticle(this.state.savedResults[event.target.id]);
        // remove results from state
        this.state.savedResults.splice(event.target.id, 1);
        // have to manually reset state, b/c above line returns the deleted array element
        this.setState({
            savedResults: this.state.savedResults
        })
    },

    handleSubmit: function() {
        console.log("Article deleted!");
    },

    render: function() {
        var articleComponents = [];
        if (this.state.savedResults !== []) {
            articleComponents = this.state.savedResults.map(function(article, index) {
                    return (<li className="collection-item" key={index}>
                                <div>
                                    <form style={{display:"inline-block"}} id={index} onSubmit={this.handleDelete}>
                                        <input type="hidden" name="extra_submit_param" value="extra_submit_value" />
                                        <button type="submit" name="action" onClick={this.handleSubmit} className="waves-effect waves-light indigo lighten-5 btn">
                                            <i className="material-icons blue-text" title="delete article">delete</i>
                                        </button>
                                        <span className="article-date"> Date Saved: {article.date.slice(0,10)} - </span>
                                        <a href={article.url}>{article.title}</a>
                                    </form>
                                </div>
                            </li>)
                }.bind(this));
        }

        return (
            
            <div className="white">
                <h3 className="center-align light-blue darken-3">Saved Articles</h3>
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