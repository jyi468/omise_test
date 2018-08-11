import React from 'react';

const Pagination = ({pageSetId, handlePrevClick, handleNextClick, handlePageClick, localPageNumber}) => {
    const pageNumbers = [];

    for (let i = 0; i < 10; i++) {
        let absolutePageNumber = 10 * pageSetId + i + 1;
        pageNumbers.push(
            <li key={absolutePageNumber} className={getPageListClass(absolutePageNumber, localPageNumber)}>
                <a className="page-link" onClick={() => handlePageClick(i)}>{absolutePageNumber}</a>
            </li>
        );
    }

    return (
        <nav>
            <ul className="pagination justify-content-end">
                {pageSetId !== 0 &&
                <li className="page-item">
                    <a className="page-link" onClick={handlePrevClick}>← Previous 10</a>
                </li>}
                {pageNumbers}
                <li className="page-item">
                    <a className="page-link" onClick={handleNextClick}>Next 10 →</a>
                </li>
            </ul>
        </nav>
    )
};

function getPageListClass(absolutePageNumber, localPageNumber) {
    const isOnPage = (absolutePageNumber - 1) % 10 === localPageNumber;
    const liStatus = isOnPage ? "active" : "";
    return `page-item ${liStatus}`;
}

export default Pagination;