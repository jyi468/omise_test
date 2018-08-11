import React, {Component} from 'react';
import Row from './Row';
import Pagination from './Pagination';
import TableUtils from '../utils/TableUtils';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sinceIdx: 0,
            sinces: [0],
            localPageNumber: 0,
            rows: [],
            repos: [],
        };
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    componentDidMount() {
        TableUtils.fetchRepos(0).then((repos) => {
            this.setState((prevState) => ({
                rows: repos.slice(0, 10),
                repos: repos,
                sinces: [...prevState.sinces, repos[99].id]
            }));
        });
    }

    handlePageClick(localPageNumber) {
        if (typeof localPageNumber === "number") {
            this.setState((prevState) => ({
                rows: prevState.repos.slice(10 * localPageNumber, 10 * localPageNumber + 10),
                localPageNumber: localPageNumber
            }));
        }
    }

    handlePrevClick() {
        debugger;
        const prevSinceIdx = this.state.sinceIdx - 1;
        TableUtils.fetchRepos(this.state.sinces[prevSinceIdx]).then((repos) => {
            this.setState({
                repos: repos,
                sinceIdx: prevSinceIdx,
            });

            this.handlePageClick(0);
        });
    }

    handleNextClick() {
        debugger;
        const nextSinceIdx = this.state.sinceIdx + 1;
        const nextSince = this.state.repos[99].id;
        TableUtils.fetchRepos(nextSince).then((repos) => {
            this.setState((prevState) => ({
                repos: repos,
                sinceIdx: nextSinceIdx,
                sinces: !prevState.sinces[nextSinceIdx] ? [...prevState.sinces, nextSince] : prevState.sinces
            }));

            this.handlePageClick(0);
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 offset-md-8">
                        <Pagination
                            sinceIdx={this.state.sinceIdx}
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
                            sinceIdx={this.state.sinceIdx}
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