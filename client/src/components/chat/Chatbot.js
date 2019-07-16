import React from "react";
import gql from "graphql-tag";
import { Card, CardContent, Avatar, Typography } from "@material-ui/core/";
import { useQuery } from 'react-apollo-hooks';
import { isAuthenticated } from '../../graphql-queries/queries'

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

  const {data: viewerData} = useQuery(isAuthenticated);
  const {data: Conversations, loading, errors} = useQuery(GET_CONVERSATIONS);

  if (loading) return <div> Loading...</div>;
  if (errors) return <div>I have and error</div>;
  if (viewerData.getUserProfile === undefined) return <div> Loading... </div>

  const viewer = Number(viewerData.getUserProfile.id)

  return (
				<div>
					<Card>
						<CardContent>
							<Typography variant="h5" component="h2">
								Conversation Rooms
							</Typography>
							{Conversations.getConversations.map((element, i) => (
                (Number(element.user_id_2) === viewer) || (Number(element.user_id_1) === viewer) ?
                  <div className = "conversation-user-container" key ={i}>
                    <Avatar
                      className = "avatar"
                      onClick={response => {
                        props.history.push("/messages" + element.id, element);
                      }}
                    >
                      {element.user_id_2 === viewer ? element.user_id_1 : element.user_id_2}
                    </Avatar>
                    <h4 className = "fullname-conversation"> {element.fullname} </h4>
                  </div> : null

							))}
						</CardContent>
					</Card>
				</div>
    );
};

export default Chatbot;
