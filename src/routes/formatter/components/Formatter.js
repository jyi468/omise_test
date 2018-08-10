import React, {Component} from 'react';
import { Well } from 'react-bootstrap';
import FormatterUtils from '../utils/FormatterUtils';
import FormatterInput from './FormatterInput';
import FormatterOutput from './FormatterOutput';

class Formatter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [],
            output: [],
            errorMsg: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        // Format input and update state
        if (event.target) {
            try {
                const json = JSON.parse(event.target.value);
                const newOutput = FormatterUtils.buildTreeFromJSON(json);

                this.setState((prevState, props) => {
                    if (prevState.input !== props.input) {
                        return {
                            output: newOutput,
                            errorMsg: ""
                        };
                    }
                });
            } catch(error) {
                switch (error.name) {
                    case "SyntaxError":
                        this.setState(() => ({
                            errorMsg: "Item must be a valid JSON object"
                        }));
                }
            }
        }
    }

    render() {
        // Pass in call back functions to FormatterInput and FormatterOutput
        return (
            <div>
                <div className="well">{this.state.errorMsg}</div>
                <div className="row">
                    <div className="col-lg-6">
                        <FormatterInput onInput={this.handleInput}/>
                    </div>
                    <div className="col-lg-6">
                        <FormatterOutput output={this.state.output}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Formatter;