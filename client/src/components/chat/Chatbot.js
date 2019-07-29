import React from "react";

import { useQuery, useMutation } from 'react-apollo-hooks';
import { isAuthenticated, GET_CONVERSATIONS } from '../../graphql-queries/queries'
import { UPDATE_SELECTED_CONVERSATION } from '../../graphql-queries/mutations'

import { Avatar, Card, Divider, List, ListItem, ListItemText, ListItemAvatar } from "@material-ui/core/";

import Messages from "./Messages"

import chatStyles from '../../css/chat/chat.module.css'


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
		updateConversation({
			variables: {conversation_id: Number(d.id), current_conversation: true},
			refetchQueries: [{ query: GET_CONVERSATIONS }, {query: isAuthenticated}]
			},
		)
  }

  Conversations.getConversations.sort((a,b) => Number(a.id) - Number(b.id))

	if (current_conversation_id == undefined) {
		return (
			<div className = "conversation-container">
				<div className = "conversations-messages-container">
					<h1 className = "no-conversations"> No conversations have been started </h1>
				</div>
			</div>
		)
	}

  return (
		<Card className={chatStyles.mainContainer}>
			<List className={chatStyles.conversationsList}>
				{Conversations.getConversations.map((d, i) => {
					if (Number(d.user_id_2) === viewer) {
						return (
							<div key={i}>
								<ListItem className={chatStyles.conversationItem} onClick={e => handleClick(e, d)}>
									{/* <div  className = {Number(d.id) === current_conversation_id ? "user-container active" : "user-container" }  onClick={ (e) => handleClick(e, d)}> */}
									<ListItemAvatar>
										<Avatar
											className = "avatar"
										>
											{d.user_id_1}
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary={d.getUserName.fullname} />
										{/* <h4 className = "fullname-conversation"> {d.getUserName.fullname} </h4> */}
									{/* </div> */}
								</ListItem>
								<Divider variant='fullWidth' component='li' />
							</div>
						)
					} else {
						return (
							<div key={i} className = "conversation-user-container">
								<div className = {Number(d.id) === current_conversation_id ? "user-container active" : "user-container" }  onClick={ (e) => handleClick(e, d)}>
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
			</List>

			<Messages current_conversation_id = {current_conversation_id}  />
		</Card>
	);
};

export default Chatbot;
