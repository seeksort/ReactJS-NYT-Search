var React = require('react'),
    helpers = require("./utils/helpers");

var Results = React.createClass({
    // POST new saved article
    handleChange: function(event) {
        event.preventDefault();
        console.log(this.props.results[event.target.id]);
        helpers.saveArticle(this.props.results[event.target.id]);
    },

    // GET saved articles
    handleSubmit: function(event) {
        this.props.setParent(helpers.getSaved().then(function(data){}.bind(this)));
        alert("Article saved!");
    },

    render: function() {
        var articleComponents = this.props.results.map(function(article, index) {
            return (<li className="collection-item" key={index}>
                        <div>
                            <form style={{display:"inline-block"}} id={index} onSubmit={this.handleChange}>
                                <input type="hidden" name="extra_submit_param" value="extra_submit_value" />
                                <button type="submit" name="action" onClick={this.handleSubmit} className="waves-effect waves-light indigo lighten-5 btn">
                                    <i className="material-icons blue-text" title="save article">save</i>
                                </button>
                                
                            </form>
                            <a href={article.url}> {article.title}</a>
                        </div>
                    </li>)
        }.bind(this));

        return (
            
            <div className="white">
                <h3 className="center-align light-blue darken-3">Results</h3>
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