import React from 'react'
import Role from "./Role"
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';


const RoleFilledUser = (props) => {

  const d = props.data
  let initials = d.fullname.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  return (
    <div className = "overall-cards-container">
      <Avatar className = "avatar redbook"> {initials} </Avatar>
      <Card className = "info-cards-container">
        <div className = "information-container">
          <h2 className = "name"> {d.fullname} </h2>
          <Role d = {d} />
        </div>
      </Card>
    </div>
  );
}

export default RoleFilledUser