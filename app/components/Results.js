var React = require('react'),
    helpers = require("./utils/helpers");

var Results = React.createClass({
    handleChange: function(event) {
        event.preventDefault();
        console.log(this.props.results[event.target.id]);
        helpers.saveArticle(this.props.results[event.target.id]);
    },

    handleSubmit: function(event) {
        alert("Saved!");
    },

    render: function() {
        var articleComponents = this.props.results.map(function(article, index) {
            return (<li className="collection-item" key={index}>
                        <div>
                            <a href={article.url}>{article.title}</a>
                            <form className="inline" id={index} onSubmit={this.handleChange}>
                                <input type="hidden" name="extra_submit_param" value="extra_submit_value" />
                                <button type="submit" name="action" onClick={this.handleSubmit} className="link-button">
                                    <i className="material-icons blue-text" title="save article">save</i>
                                </button>
                                
                            </form>
                        </div>
                    </li>)
        }.bind(this));

        return (
            
            <div className="white">
                <h2 className="center-align light-blue darken-3">Results</h2>
                <div className="row">
                    <div className="col s12">
                        <ul className="collection with-header">
                            
                            {articleComponents}

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