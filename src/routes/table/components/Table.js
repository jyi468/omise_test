import React, {Component} from 'react';
import Row from './Row';
import Pagination from './Pagination';
import TableUtils from '../utils/TableUtils';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSetId: 0,
            repos: [],
            since: 0,
            prevSince: null,
            nextSince: null
        };
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    componentDidMount() {
        TableUtils.fetchRepos(this.state.since).then((repos) => {
            this.setState({
                repos: repos,
                nextSince: repos[99]
            });
        });
    }

    handlePrevClick() {
        TableUtils.fetchRepos(this.state.prevSince).then((repos) => {
            this.setState({
                repos: repos,
                since: this.state.prevSince,
                prevSince: repos[0] - 1,
                nextSince: this.state.since
            });
        });
    }

    handleNextClick() {
        TableUtils.fetchRepos(this.state.nextSince).then((repos) => {
            this.setState({
                repos: repos,
                since: this.state.nextSince,
                prevSince: this.state.since,
                nextSince: repos[99]
            });
        });
    }

    render() {
        return (
            <div>
                <div className="page-header mt-5 mb-5">
                    <h1>GitHub Api Repositories</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-md-8">
                        <Pagination
                            pageSetId={this.state.pageSetId}
                            handlePrevClick={this.handlePrevClick}
                            handleNextClick={this.handleNextClick}
                        />
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
                                // TODO: use indexing for sets of 10 for repos
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