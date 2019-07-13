import React from 'react'
import Role from "./Role"
import { Card, Button, Avatar } from "@material-ui/core";
import { useMutation } from 'react-apollo-hooks';
import { ADD_CONVERSATION_MUTATION } from '../../graphql-queries/mutations'


const RoleFilledUser = (props) => {

  const addConversation = useMutation(ADD_CONVERSATION_MUTATION);

    async function myHandler() {
      let result;
      try {
        result = await addConversation({variables: {user_id_2: (+d.id)}});
        props.history.push("/messages" + result.data.addConversation.id)
      } catch (error) {
        // error handler
      }
   }

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
          <Button
            onClick = {myHandler}
            className= "message button"
            variant="contained"
          >
            Message
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default RoleFilledUser