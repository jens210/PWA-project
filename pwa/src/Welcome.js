import React, { Component } from 'react';
class Welcome extends Component {
    render() {
        return (
            <div className="container">
            
                <form>
                <h1> Welcome </h1>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Type your name" onChange={this.props.onChange}></input>
                        <button onClick={this.props.handleInput}
                            type="submit" className="btn btn-primary">Start Questionaire
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Welcome;
