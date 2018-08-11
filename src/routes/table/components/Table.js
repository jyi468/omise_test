import React, {Component} from 'react';
import Row from './Row';
import Pagination from './Pagination';
import TableUtils from '../utils/TableUtils';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSetId: 0,
            localPageNumber: 0,
            rows: [],
            repos: [],
            since: 0,
            prevSince: 0,
            nextSince: null
        };
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    componentDidMount() {
        TableUtils.fetchRepos(this.state.since).then((repos) => {
            this.setState({
                rows: repos.slice(0, 10),
                repos: repos,
                nextSince: repos[99].id
            });
        });
    }

    handlePageClick(localPageNumber) {
        if (typeof localPageNumber === "number") {
            this.setState({
                rows: this.state.repos.slice(10 * localPageNumber, 10 * localPageNumber + 10),
                localPageNumber: localPageNumber
            });
        }
    }

    handlePrevClick() {
        debugger;
        TableUtils.fetchRepos(this.state.prevSince).then((repos) => {
            this.setState({
                repos: repos,
                pageSetId: this.state.pageSetId - 1,
                since: this.state.prevSince,
                prevSince: repos[0].id - 1,
                nextSince: this.state.since
            });

            this.handlePageClick(0);
        });
    }

    handleNextClick() {
        debugger;
        TableUtils.fetchRepos(this.state.nextSince).then((repos) => {
            this.setState({
                repos: repos,
                pageSetId: this.state.pageSetId + 1,
                since: this.state.nextSince,
                prevSince: this.state.since,
                nextSince: repos[99].id
            });

            this.handlePageClick(0);
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 offset-md-8">
                        <Pagination
                            pageSetId={this.state.pageSetId}
                            localPageNumber={this.state.localPageNumber}
                            handlePageClick={this.handlePageClick}
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
                                this.state.rows.map((repo) => (
                                    <Row data={repo} key={repo.id}/>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 offset-md-8">
                        <Pagination
                            pageSetId={this.state.pageSetId}
                            localPageNumber={this.state.localPageNumber}
                            handlePageClick={this.handlePageClick}
                            handlePrevClick={this.handlePrevClick}
                            handleNextClick={this.handleNextClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;