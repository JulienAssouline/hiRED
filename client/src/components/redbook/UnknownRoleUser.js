import React from 'react'
import { Card, Button, Avatar } from "@material-ui/core";

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
          <Button
            className= "message button unknown"
            variant="contained"
          >
            Message
          </Button>
        </div>
      </Card>
    </div>
);
}

export default UnknownRoleUser