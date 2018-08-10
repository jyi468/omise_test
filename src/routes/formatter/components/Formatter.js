import React, {Component} from 'react';
import FormatterUtils from '../utils/FormatterUtils';
import FormatterInput from './FormatterInput';
import FormatterOutput from './FormatterOutput';

class Formatter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [],
            output: []
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        // Format input and update state
        if (event.target) {
            const newOutput = FormatterUtils.buildTree(event.target.value);

            this.setState((prevState, props) =>
                {
                    if (prevState.input !== props.input) {
                        return {
                            output: newOutput
                        };
                    }
                }
            );
        }
    }

    render() {
        // Pass in call back functions to FormatterInput and FormatterOutput
        return (
            <div class="row">
                <div class="col-lg-6">
                    <FormatterInput onInput={this.handleInput}/>
                </div>
                <div class="col-lg-6">
                    <FormatterOutput output={this.state.output}/>
                </div>
            </div>
        );
    }
}

export default Formatter;