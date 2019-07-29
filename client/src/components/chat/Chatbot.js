import React from "react";
import { Avatar } from "@material-ui/core/";
import { useQuery, useMutation } from 'react-apollo-hooks';
import { isAuthenticated, GET_CONVERSATIONS } from '../../graphql-queries/queries'
import { UPDATE_SELECTED_CONVERSATION } from '../../graphql-queries/mutations'
import Messages from "./Messages"


const Chatbot = props => {

  const {data: viewerData} = useQuery(isAuthenticated);
  const {data: Conversations, loading, errors} = useQuery(GET_CONVERSATIONS);

   const updateConversation = useMutation(UPDATE_SELECTED_CONVERSATION)


  if (loading) return <div> Loading...</div>;
  if (errors) return <div>I have and error</div>;
  if (viewerData.getUserProfile === undefined) return <div> Loading... </div>


  const viewer = Number(viewerData.getUserProfile.id)
  const current_conversation_id = viewerData.getUserProfile.current_conversation_id

  function handleClick(e, d) {

    console.log(viewerData.getUserProfile.current_conversation_id)
      updateConversation({
        variables: {conversation_id: Number(d.id), current_conversation: true},
        refetchQueries: [{ query: GET_CONVERSATIONS }]
        },
      )
  }

  Conversations.getConversations.sort((a,b) => Number(a.id) - Number(b.id))

 const currentConversationData = Conversations.getConversations.filter((d,i) => d.current_conversation)


 if (currentConversationData[0] === undefined) {
  return (
    <div className = "conversation-container">
      <div className = "conversations-messages-container">
            <h1 className = "no-conversations"> No conversations have been started </h1>
      </div>
    </div>
    )
 }


  return (
    <div className = "conversation-container">
      <div className = "conversations-messages-container">
  			<div className = "user-info-card">
  				<div className = "card content container">
  					{Conversations.getConversations.map((d, i) => {
              if (Number(d.user_id_2) === viewer) {
                return (
                            <div key ={i} className = "conversation-user-container">
                              <div key = {console.log(d)} className = {Number(d.id) === current_conversation_id ? "user-container active" : "user-container" }  onClick={ (e) => handleClick(e, d)}>
                                <Avatar
                                  className = "avatar"
                                >
                                  {d.user_id_1}
                                </Avatar>
                                <h4 className = "fullname-conversation"> {d.getUserName.fullname} </h4>
                              </div>
                            </div>)
              }
              else {
                return (
                          <div key ={i} className = "conversation-user-container">
                            <div className = {Number(d.id === current_conversation_id) ? "user-container active" : "user-container" }  onClick={ (e) => handleClick(e, d)}>
                              <Avatar
                                className = "avatar"
                              >
                                {d.user_id_2}
                              </Avatar>
                              <h4 className = "fullname-conversation"> {d.getUserName.fullname} </h4>
                            </div>
                          </div>
                    )
              }
  					})}
  				</div>
  			</div>
         <Messages current_conversation_id = {current_conversation_id}  />
        </div>
      </div>
    );
};

export default Chatbot;
