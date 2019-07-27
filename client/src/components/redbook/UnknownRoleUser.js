import React from 'react'
import { Card, Button, Avatar } from "@material-ui/core";
import { useMutation } from 'react-apollo-hooks';
import { ADD_CONVERSATION_MUTATION } from '../../graphql-queries/mutations'


const UnknownRoleUser = (props) => {
	const { handleGoToUser } = props

  const addConversation = useMutation(ADD_CONVERSATION_MUTATION);

   function myHandler() {
     try {
       addConversation({variables: {user_id_2: (+d.id)}});
       props.history.push("/chatbot")
     } catch (error) {
       // error handler
     }
  }

  const d = props.data
  let initials = d.fullname.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  return (
    <div className = "overall-cards-container" onClick={() => handleGoToUser(d.id)}>
      <Avatar className = "avatar"> {initials} </Avatar>
      <Card className = "info-cards-container">
        <div className = "information-unknown-container">
          <h2 className = "name"> {d.fullname} </h2>
          <Button
            onClick = {myHandler}
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