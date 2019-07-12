import React from 'react'

const Pagination = (props) => {

  return (
    <div className = "redbook-pagination">
      {
        props.pages.map((d,i) =>
          <div key = {i} onClick = { (e) => props.handleClick(e)} className = {props.currentPage === d ? "page-container active" : "page-container"}>
           <p className = {props.currentPage === d ? "page active" : "page"}> {d} </p>
          </div>
          )
      }
    </div>
  );
}

export default Pagination