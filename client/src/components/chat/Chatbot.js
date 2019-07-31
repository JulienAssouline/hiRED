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
						return (
							<div key={i}>
								<ListItem className={+d.id === current_conversation_id ? chatStyles.activeConversationItem : chatStyles.conversationItem} onClick={e => handleClick(e, d)}>
									<ListItemAvatar>
										<Avatar
											className = "avatar"
										>
											{d.getUserName.fullname.substring(0, 2)}
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary={d.getUserName.fullname} />
								</ListItem>
								<Divider variant='fullWidth' component='li' />
							</div>
						)
				})}
			</List>

			<Messages current_conversation_id = {current_conversation_id}  />
		</Card>
	);
};

export default Chatbot;
