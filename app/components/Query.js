var React = require('react');

var Query = React.createClass({
    getInitialState: function() {
        return { topic: "", startYr: "", endYr: "" };
      },
    handleChange: function(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    handleSubmit: function(event) {
        event.preventDefault();
        this.props.setTopic(this.state.topic);
        this.props.setStartYr(this.state.startYr);
        this.props.setEndYr(this.state.endYr);
        this.setState({ topic: "", startYr: "", endYr: "" });

    },
    render: function() {
        return (
            
            <div className="white">
                <h3 className="center-align light-blue darken-3">Search</h3>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input 
                                    placeholder="enter a topic..." 
                                    id="topic" 
                                    type="text" 
                                    value={this.state.topic} 
                                    className="validate" 
                                    onChange={this.handleChange} 
                                 />
                                <label htmlFor="topic">Topic</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input 
                                    placeholder="enter a year..." 
                                    id="startYr" 
                                    type="text" 
                                    value={this.state.startYr} 
                                    className="validate" 
                                    onChange={this.handleChange}
                                 />
                                <label htmlFor="start_year">Start Year</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input 
                                    placeholder="enter a year..." 
                                    id="endYr" 
                                    type="text" 
                                    value={this.state.endYr} 
                                    className="validate" 
                                    onChange={this.handleChange}
                                 />
                                <label htmlFor="end_year">End Year</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="waves-effect light-blue btn col s10 offset-s1" type="submit" name="action">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Query;