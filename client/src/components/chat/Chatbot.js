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
  const [activeUser, setActiveUser] = useState(false)

  const {data: viewerData} = useQuery(isAuthenticated);
  const {data: Conversations, loading, errors} = useQuery(GET_CONVERSATIONS);


  if (loading) return <div> Loading...</div>;
  if (errors) return <div>I have and error</div>;
  if (viewerData.getUserProfile === undefined) return <div> Loading... </div>

  const viewer = Number(viewerData.getUserProfile.id)

  function handleClick(e, d) {
    setConversationId(d.id)

    // console.log(e.currentTarget.className)
    console.log(conversationId)
    console.log(d.user_id_2)

    if (!activeUser) {
      e.currentTarget.className = "user-container active"
      setActiveUser(true)
    }
    else {
      e.currentTarget.className = "user-container"
      setActiveUser(false)
    }

  }

  // function rotLeft(n, d) {

  //   let counter = 0;
  //   for(let i = 0; i < n.length; i++) {
  //     if (counter <= d) {
  //       console.log(n.shift())
  //     }
  //     counter++
  //   }
  // }

  // rotLeft([1,2,3,4, 5], 4)

  return (
		<div>
    <div className = "conversations-messages-container">
			<div className = "user-info-card">
				<div className = "card content container">
					{Conversations.getConversations.map((d, i) => (
            (Number(d.user_id_2) === viewer) || (Number(d.user_id_1) === viewer) ?
            <div key ={i} className = "conversation-user-container">
              <div className = "user-container"  onClick={ (e) => handleClick(e, d)}>
                <Avatar
                  className = "avatar"
                >
                  {d.user_id_2 === viewer ? d.user_id_1 : d.user_id_2}
                </Avatar>
                <h4 className = "fullname-conversation"> {d.fullname} </h4>
              </div>
            </div>: null
					))}
				</div>
			</div>
       <Messages conversation = {conversationId}  />
      </div>
		</div>
    );
};

export default Chatbot;
