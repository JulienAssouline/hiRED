import React, { useState} from "react"
import { TextField, Button, MenuItem} from '@material-ui/core'
import '../../css/mentor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { programs } from '../../form-dropdown-values'
import Select from 'react-select';
import { ADD_CONVERSATION_MUTATION, UPDATE_SELECTED_CONVERSATION } from '../../graphql-queries/mutations'
import { GET_ALL_SKILLS, GET_MENTORS, GET_CONVERSATIONS, isAuthenticated } from '../../graphql-queries/queries'

import { useQuery, useMutation } from 'react-apollo-hooks';


function Mentors(props){
  const [value, setValue] = useState("")
  const [dropdown, setDropdown] = useState("")
  const [skills, setSkills] = useState([])
  const [valueSubmit, setValueSubmit] = useState("")
  const [dropdownSubmit, setDropdownSubmit] = useState("")
  const [skillsSubmit, setSkillsSubmit] = useState([])

  const {data: options} = useQuery(GET_ALL_SKILLS);
  const {data: mentors, error, loading} = useQuery(GET_MENTORS, {variables: {fullnameSearch: valueSubmit, getPrograms: dropdownSubmit, getSkills: skillsSubmit}});
  const {data: viewerData} = useQuery(isAuthenticated);

  const addConversation = useMutation(ADD_CONVERSATION_MUTATION)
  const updateConversation = useMutation(UPDATE_SELECTED_CONVERSATION)


  if (loading) return <div> Loading...</div>;
  if (error) return <div>I have and error</div>;

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleDropDownChange(e){
    setDropdown(e.target.value)
  }

  function handleSelectChange(e) {
    let skills_array = [];

    e.forEach(d => {
      skills_array.push({skills_id: d.id})
    })

    setSkills(skills_array)
  }

  function handleChat(d) {
    let current_conversation = d.user.getUserConversation.filter((d) => {
      if (Number(d.user_id_2) === Number(viewerData.getUserProfile.id)) {
        return Number(d.user_id_2) === Number(viewerData.getUserProfile.id)
      }
      else {
        return Number(d.user_id_1) === Number(viewerData.getUserProfile.id)
      }
    })

    addConversation({variables: {user_id_2: (+d.user.id)}});
    updateConversation({variables: {conversation_id: current_conversation[0].id, current_conversation: true},
      refetchQueries: [{ query: GET_CONVERSATIONS }]
    })
    props.history.push("/chatbot")
  }

 function handleSubmit(event) {
  setValueSubmit(value)
  setDropdownSubmit(dropdown)
  setSkillsSubmit(skills)
      event.preventDefault()
  }

  return (
    <div className = "mentors-page">
        <div>
                    <div className='mentor-content-container'>
                    <div className = "form-search">
                    <form onSubmit={handleSubmit}>
                    <div className = "search-filter">
                      <TextField
                        id='Search'
                        name='Search'
                        label = {"Search"}
                        value={value}
                        onChange={(e) => handleChange(e)}
                        margin='normal'
                      />
                      <TextField
                        id='whichProgram'
                        select
                        name='whichProgram'
                        label='Filter by program'
                        value={dropdown}
                        onChange={(e) => handleDropDownChange(e)}
                        margin='normal'
                      >
                        {programs.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <Select
                          isMulti
                          name="colors"
                          options={options.getAllSkills}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          onChange = {handleSelectChange}
                        />
                    </div>
                    <br />
                    <Button className='btn-search-submit'
                              variant='contained'
                              color='primary'
                              type="submit"> Search </Button>
                    </form>
                    </div>
                  <div className = "mentors-container">
                    {mentors.getMentors.map((d,i) =>
                      d.user.id !== viewerData.getUserProfile.id ? <div key = {i} className = "mentor">
                         <div className = "mentor_wrapper">
                           <p className = "mentor_fullname"> {d.user.fullname} </p>
                           <svg width = "30" height = "30"> <circle r={6} cx = {15} cy={15} style={{fill: d.status ? "#26a69a" : "grey"}}> </circle> </svg>
                         </div>
                         <div className = "mentor_wrapper">
                           <FontAwesomeIcon className = "work-icon" icon={faBriefcase} />
                           <p className = "mentor_job"> {d.user.current_job} </p>
                         </div>
                         <div className = "mentor_wrapper">
                           <FontAwesomeIcon className = "location-icon" icon ={faMapMarkerAlt} />
                           <p className = "mentor_location"> {d.user.location} </p>
                         </div>
                         <Button
                              className = "chat mentors button"
                              variant='contained'
                              onClick = {() => { handleChat(d) }}
                              color='primary'> Chat </Button>
                       </div> : null
                       )
                      }
                    </div>
                  </div>
              </div>
    </div>
    )
}

export default Mentors