import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Table from './components/Table';

class TablePage extends Component {
    render() {
        return (<Route path="/table" component={Table}/>);
    }
}

export default TablePage;