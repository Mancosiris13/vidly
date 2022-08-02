import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);
  //[1,2,3].map()
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //lodash is popular JS library{}

  if (pagesCount === 1) {
    return null;
  }
  const pages = _.range(1, pagesCount + 1); // this method doesnt include the end number itself

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
