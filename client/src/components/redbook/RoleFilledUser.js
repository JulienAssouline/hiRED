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

    function myHandler(e, d) {

      e.stopPropagation()

      let current_conversation = d.getUserConversation.filter((d) => {
        if (Number(d.user_id_2) === Number(props.viewer)) {
          return Number(d.user_id_2) === Number(props.viewer)
        }
        else {
          return Number(d.user_id_1) === Number(props.viewer)
        }
      })

      try {
        addConversation({variables: {user_id_2: Number(d.id)}});
        updateConversation({variables: {conversation_id: current_conversation[0].id, current_conversation: true},
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
          <div className = "user-info-container">
          <Role d = {d} />
          <Button
            onClick = {(e) => myHandler(e, d)}
            className= "message button"
            variant="contained"
          >
            Chat
          </Button>
          </div>
        </div>
      </Card>
    </div> : null
  );
}

export default RoleFilledUser