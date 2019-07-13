import React from 'react'

const Pagination = (props) => {

  return (
    <div className = "redbook-pagination">
      <p onClick = {(e) => props.handleBackClick(e, props.maxmin.min)} className = "back"> Back </p>
      {
        props.pages.map((d,i) =>
          <div key = {i} onClick = { (e) => props.handleClick(e)} className = {props.currentPage === d ? "page-container active" : "page-container"}>
            {d}
          </div>
          )
      }
      <p onClick = {(e) => props.handleNextClick(e, props.maxmin.max)} className = "next"> Next </p>
    </div>
  );
}

export default Pagination