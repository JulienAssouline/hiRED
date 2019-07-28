import React from 'react'
import { Card, Button, Avatar } from "@material-ui/core";
import { useMutation } from 'react-apollo-hooks';
import { ADD_CONVERSATION_MUTATION, UPDATE_SELECTED_CONVERSATION } from '../../graphql-queries/mutations'
import { GET_CONVERSATIONS } from '../../graphql-queries/queries'

const UnknownRoleUser = (props) => {
	const { handleGoToUser } = props

  const addConversation = useMutation(ADD_CONVERSATION_MUTATION);
  const updateConversation = useMutation(UPDATE_SELECTED_CONVERSATION)

   function myHandler(e) {
    e.stopPropagation()

     try {
       addConversation({variables: {user_id_2: (+d.id)}});
       updateConversation({variables: {current_conversation: true, user_id: Number(d.id)},
          refetchQueries: [{ query: GET_CONVERSATIONS }]
        })
       props.history.push("/chatbot")
     } catch (error) {
       // error handler
     }
  }

  const d = props.data
  let initials = d.fullname.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  return (
     Number(d.id) !== props.viewer ?
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
    </div> : null
);
}

export default UnknownRoleUser