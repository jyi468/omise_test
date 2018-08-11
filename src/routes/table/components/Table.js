import React, { Component } from 'react';
import Row from './Row';
import Pagination from './Pagination';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSetId: 0,
            repos: []
        }
    }

    render() {
        return (
            <div>
                <div className="page-header mt-5 mb-5">
                    <h1>GitHub Api Repositories</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-md-8">
                        <Pagination pageNumber={this.state.pageSetId}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Repository ID</th>
                                <th scope="col">Repository Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">URL</th>
                                <th scope="col">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.repos.map((repo) => (
                                    <Row data={repo}/>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 offset-md-8">
                        <Pagination pageNumber={this.state.pageSetId}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Table;