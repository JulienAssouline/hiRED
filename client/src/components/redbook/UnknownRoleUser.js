import React from 'react'
import { Card, Button, Avatar } from "@material-ui/core";
import { useMutation } from 'react-apollo-hooks';
import { ADD_CONVERSATION_MUTATION, UPDATE_SELECTED_CONVERSATION } from '../../graphql-queries/mutations'
import { GET_CONVERSATIONS, isAuthenticated } from '../../graphql-queries/queries'

const UnknownRoleUser = (props) => {
	const { handleGoToUser } = props

  const addConversation = useMutation(ADD_CONVERSATION_MUTATION);
  const updateConversation = useMutation(UPDATE_SELECTED_CONVERSATION)


    function myHandler(e, d) {

      e.stopPropagation()

      try {

        let current_conversation = d.getUserConversation.filter((d) => {
          if (Number(d.user_id_2) === Number(props.viewer)) {
            return Number(d.user_id_2) === Number(props.viewer)
          }
          else {
            return Number(d.user_id_1) === Number(props.viewer)
          }
        })

        if (current_conversation.length === 0) {
          addConversation({variables: {user_id_2: Number(d.id)},
            refetchQueries: [{ query: GET_CONVERSATIONS }, {query: isAuthenticated}]
          });
          props.history.push("/chatbot")
        }
        else {
            updateConversation({variables: {conversation_id: current_conversation[0].id, current_conversation: true},
              refetchQueries: [{ query: GET_CONVERSATIONS }, {query: isAuthenticated}]
            })
            props.history.push("/chatbot")
        }

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
          <h2 className = "name unknown"> {d.fullname} </h2>
          <Button
            onClick = {(e) => myHandler(e, d)}
            className= "message button unknown"
            variant="contained"
          >
            Chat
          </Button>
        </div>
      </Card>
    </div>
);
}

export default UnknownRoleUser