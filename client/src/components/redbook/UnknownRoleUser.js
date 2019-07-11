import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

const UnknownRoleUser = (props) => {

  const d = props.data
  let initials = d.fullname.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  return (
    <div className = "overall-cards-container">
      <Avatar className = "avatar"> {initials} </Avatar>
      <Card className = "info-cards-container">
        <div className = "information-unknown-container">
          <h2 className = "name"> {d.fullname} </h2>
        </div>
      </Card>
    </div>
);
}

export default UnknownRoleUser