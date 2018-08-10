import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import FormatterPage from './routes/formatter/FormatterPage';
import TablePage from "./routes/table/TablePage";

class App extends Component {
  render() {
    return (
        <Router>
            <div class="container">
                <ul>
                    <li>
                        <Link to="/formatter">JSON Formatter</Link>
                    </li>
                    <li>
                        <Link to="/table">GitHub Repository Table</Link>
                    </li>
                </ul>

                <Route path="/formatter" component={FormatterPage}/>
                <Route path="/table" component={TablePage}/>
            </div>
        </Router>
    );
  }
}

export default App;
