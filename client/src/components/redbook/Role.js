import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'


const programs = {
    APP: 'App Dev',
    DM: 'Digital Marketing',
    UX: 'UX Designer',
    UI: 'UI Designer',
    WEB: 'Web Dev',
    WEBAPP: 'Web & App Dev',
    UXUI: 'UX & UI'
  }

const Role = (props) => {

  const d = props.d

  if (d.role === "STUDENT") {
    return (
        <div className = "role-container">
          <div className = "role-icon-container">
            <FontAwesomeIcon className='redbook-role-icon' icon={faBook} />
            <p> Studying {programs[d.programs]} </p>
          </div>
          <p> @ {d.campus} </p>
        </div>
    );
  }
  else if (d.role === "ALUMNI") {
    return (
        <div className = "role-container">
          <div className = "role-icon-container">
            <FontAwesomeIcon className='redbook-role-icon' icon={faGraduationCap} />
            <p> {d.current_job} </p>
          </div>
          <p> @ {d.job_location} </p>
        </div>
    );
  }
  else if (d.role === "STAFF") {
    return (
        <div className = "role-container">
          <div className = "role-icon-container">
            <FontAwesomeIcon className='redbook-role-icon' icon={faChalkboardTeacher} />
            <p> Teaching {programs[d.programs]} </p>
          </div>
          <p> @ {d.campus} </p>
        </div>
    );
  }

}

export default Role