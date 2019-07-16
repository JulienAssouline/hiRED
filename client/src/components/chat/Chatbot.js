import React, {useState} from "react";
import gql from "graphql-tag";
import { Card, CardContent, Avatar, Typography } from "@material-ui/core/";
import { useQuery } from 'react-apollo-hooks';
import { isAuthenticated } from '../../graphql-queries/queries'
import Messages from "./Messages"


const GET_CONVERSATIONS = gql`
  query {
    getConversations {
      id
      user_id_1
      user_id_2
      fullname
    }
  }
`;

const Chatbot = props => {

  const [conversationId, setConversationId] = useState(0)

  const {data: viewerData} = useQuery(isAuthenticated);
  const {data: Conversations, loading, errors} = useQuery(GET_CONVERSATIONS);


  if (loading) return <div> Loading...</div>;
  if (errors) return <div>I have and error</div>;
  if (viewerData.getUserProfile === undefined) return <div> Loading... </div>

  const viewer = Number(viewerData.getUserProfile.id)



  function handleClick(element) {
    setConversationId(element.id)
  }

  return (
		<div>
    <div className = "conversations-messages-container">
			<Card>
				<CardContent>
					{Conversations.getConversations.map((element, i) => (
            (Number(element.user_id_2) === viewer) || (Number(element.user_id_1) === viewer) ?

              <div className = "conversation-user-container" key ={i}>
                <Avatar
                  className = "avatar"
                  onClick={ () => handleClick(element)}
                >
                  {element.user_id_2 === viewer ? element.user_id_1 : element.user_id_2}
                </Avatar>
                <h4 className = "fullname-conversation"> {element.fullname} </h4>
              </div> : null
					))}
				</CardContent>
			</Card>
       <Messages conversation = {conversationId}  />
      </div>
		</div>
    );
};

export default Chatbot;
