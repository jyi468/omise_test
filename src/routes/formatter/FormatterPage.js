import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Formatter from './components/Formatter';

class FormatterPage extends Component {
    render() {
        return (<Route path="/formatter" component={Formatter}/>);
    }
}

export default FormatterPage;