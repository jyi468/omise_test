import React from 'react';

const Pagination = ({pageSetId, handlePrevClick, handleNextClick}) => {
    const { ...prevPageItem } = {};
    const { ...nextPageItem } = {};
    const { ...prevTabIndex } = {};
    const { ...nextTabIndex } = {};

    // pageSetId is the set number of 100 results returned
    pageSetId = 0;

    const pageNumbers = [];
    for (let i = 1; i < 11; i++) {
        pageNumbers.push(
            <li key={pageSetId + i} className="page-item"><a className="page-link" href="#">{pageSetId + i}</a></li>
        );
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={handlePrevClick}>← Previous 10</a>
                </li>
                {pageNumbers}
                <li className="page-item">
                    <a className="page-link" href="#" onClick={handleNextClick}>Next 10 →</a>
                </li>
            </ul>
        </nav>
    )
};

export default Pagination;