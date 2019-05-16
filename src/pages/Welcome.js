import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = { success: false, input: [] };
    }

    render() {
        return (
            <form>
                <div className="welcome">
                    <h1 className="title"> Welcome </h1>
                    <p>We strongly encourage you to fill our this form before every visit</p>
                    <input
                        name="nickname"
                        data-msg-required="Write a name"
                        required="required"
                        type="text"
                        className="question_input"
                        placeholder="Type your name"
                        onChange={this.props.onChange}
                    />

                    <Link
                        className="button btn btn-info is-primary"
                        to={{
                            pathname: `/Questionnaire`,
                            state: { nickname: this.state.nickname },
                        }}
                        disabled={this.props.nickname.length < 1 ? true : false}
                    >
                        {' '}
                        Start questionnaire
                    </Link>
                </div>

            </form>
        );
    }
}

export default Welcome;
