import React from 'react'
import Role from "./Role"
import { Card, Button, Avatar } from "@material-ui/core";
import { useMutation } from 'react-apollo-hooks';
import { ADD_CONVERSATION_MUTATION, UPDATE_SELECTED_CONVERSATION } from '../../graphql-queries/mutations'
import { GET_CONVERSATIONS } from '../../graphql-queries/queries'




const RoleFilledUser = (props) => {
	const { handleGoToUser } = props

  const addConversation = useMutation(ADD_CONVERSATION_MUTATION);
  const updateConversation = useMutation(UPDATE_SELECTED_CONVERSATION)


    function myHandler(e) {
      e.stopPropagation()
      try {
        addConversation({variables: {user_id_2: Number(d.id)}});
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
      <Avatar className = "avatar redbook"> {initials} </Avatar>
      <Card className = "info-cards-container">
        <div className = "information-container">
          <h2 className = "name"> {d.fullname} </h2>
          <Role d = {d} />
          <Button
            onClick = {myHandler}
            className= "message button"
            variant="contained"
          >
            Message
          </Button>
        </div>
      </Card>
    </div> : null
  );
}

export default RoleFilledUser