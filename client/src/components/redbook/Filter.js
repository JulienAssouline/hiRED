import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faFilter } from '@fortawesome/free-solid-svg-icons'
import { TextField } from '@material-ui/core'



const Filter = (props) => {

  const [value, setValue] = useState("")

  return (
    <div className = "filter-container">
      <div className = "filter-icon-text-container">
        <FontAwesomeIcon className='filter-icon' icon={faAddressBook} />
        <h4 className = "redbook-text"> REDbook </h4>
      </div>
      <div className = "search-filter-container">
        <TextField
          id='Search'
          name='Search'
          label = {"Search by name"}
          value={value}
          onChange={(e) => console.log(e)}
        />
        <div class="vl"></div>
        <FontAwesomeIcon className='filter-icon' icon={faFilter} />
        <p className = "filter-text"> Filter </p>

      </div>
    </div>

  );
}

export default Filter