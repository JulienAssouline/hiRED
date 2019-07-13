import React, {useState} from 'react'
import { useQuery } from 'react-apollo-hooks';
import { GET_REDBOOK_USERS } from '../../graphql-queries/queries'
import RoleFilledUser from "./RoleFilledUser"
import UnknownRoleUser from "./UnknownRoleUser"
import '../../css/redbook.css'
import Filter from "./Filter"
import Pagination from "./Pagination"



const Redbook = (props) => {

  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 9

  const {data, error, loading} = useQuery(GET_REDBOOK_USERS);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>I have an error</div>


  const indexOfLastCards = currentPage * cardsPerPage
  const indexOfFirstCards = indexOfLastCards - cardsPerPage

  const paginatedData = data.getRedBookUsers.filter((d,i) => i <= indexOfLastCards && indexOfFirstCards < i)

  const number_of_pages = [];

   for (let i = 1; i <= Math.ceil(data.getRedBookUsers.length / cardsPerPage); i++) {
     number_of_pages.push(i);
   }

   const max_pages = Math.max.apply(null, number_of_pages)
   const min_pages = Math.min.apply(null, number_of_pages)

   function handleClick(e) {
    setCurrentPage(Number(e.target.innerHTML))
   }

   function handleNextClick(e, max) {
    if (currentPage !== max) {
      setCurrentPage(currentPage + 1)
    }
   }

   function handleBackClick(e, min) {
      if (currentPage !== min) {
        setCurrentPage(currentPage - 1)
      }
   }

   function handleEndClick(e, max) {
    setCurrentPage(max)
   }

   function handleStartClick(e, min) {
    setCurrentPage(min)
   }



  return (
    <div className = "redbook-page-container">
      <Filter />
      <div className = "redbook-cards-container">
        {
          paginatedData.map((d,i) =>
              d.role ? <RoleFilledUser history = {props.history} key = {i} data = {d} /> : <UnknownRoleUser key = {i} data = {d} />
          )
        }
      </div>
      <div className = "hr"> </div>
      <Pagination
        maxmin = {{max: max_pages, min: min_pages}}
        handleBackClick = {handleBackClick}
        handleNextClick = {handleNextClick}
        currentPage = {currentPage}
        pages = {number_of_pages}
        handleClick = {handleClick}
        handleEndClick ={handleEndClick}
        handleStartClick = {handleStartClick}
         />
        }
    </div>
  );
}

export default Redbook