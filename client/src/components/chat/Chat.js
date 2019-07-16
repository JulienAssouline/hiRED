import React from "react";
import gql from "graphql-tag";
import { Card, CardContent, Avatar, Typography } from "@material-ui/core/";
import { useQuery } from 'react-apollo-hooks';
import { isAuthenticated } from '../../graphql-queries/queries'
import Chatbot from "./Chatbot"
import Messages from "./Messages"

const GET_CONVERSATIONS = gql`
  query {
    getConversations {
      id
      user_id_1
      user_id_2
    }
  }
`;

const Chat = props => {

  const {data: viewerData} = useQuery(isAuthenticated);

  return (
    <div className = "chat-container">
     <Chatbot />
     </div>
  );
};

export default Chat;
