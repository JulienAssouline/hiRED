import React from 'react'

const Pagination = (props) => {

  return (
    <div className = "redbook-pagination">
      {
        props.pages.map((d,i) =>
          <div key = {i} onClick = {props.handleClick} className = "page-container">
           <p> {d} </p>
          </div>
          )
      }
    </div>
  );
}

export default Pagination