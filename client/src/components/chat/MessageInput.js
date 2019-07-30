import React, { useState } from 'react'

import { Avatar, Typography, Card, Divider, InputBase, IconButton, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import chatStyles from '../../css/chat/chat.module.css'

function MessageInput(props) {
	const [value, setValue] = useState("");
	const [submit, setSubmit] = useState("")

	function handleChange(e) {
		setValue(e.target.value)
	}

	function handleClick(e, addMessages) {
		setSubmit(value)
		addMessages({variables: {content: value, conversation_id: props.pageNumber}})
		setValue("")
	}

	const viewer = props.viewerData.getUserProfile !== undefined ? props.viewerData.getUserProfile.id : null

	if (props.viewerData.getUserProfile === undefined) return <div> Loading... </div>

	props.data.getMessages.forEach((d,i) => {
		d.date_created = +d.date_created
	})

	props.data.getMessages.sort((a,b) => a.date_created - b.date_created)

	var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


   let date_array = []

  props.data.getMessages.forEach((d,i) => {
  	let d1 = new Date(d.date_created),
    day = d1.getDate(),
    month = d1.getMonth(),
    year = d1.getFullYear();

    d.date = monthName[month] + " " + day + " " + year;
    date_array.push(d.date)
  })

  console.log(props.data.getMessages)

  date_array = date_array.reverse()

	return (
		<>
			<List className={chatStyles.messagesContainer}>
				{props.data.getMessages.reverse().map((d,i, array) =>
						<div key = {i}>
								<ListItemText
									primary={<Typography style={{ display: (d.date === date_array[i + 1]) ? "none": "block", textAlign: "center", fontSize: "1rem", fontWeight: 900}}>{d.date}</Typography>}>
								</ListItemText>
							<ListItem  className = {Number(viewer) === Number(d.from_user) ? "messages-active" : "messages"}>
								<ListItemAvatar>
									<Avatar>
										{d.fullname.substring(0, 2)}
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									 primary={<Typography style={{ fontWeight: "bold"}}>{d.fullname}</Typography>}
									 secondary={d.content} />
								{/* <h3> {d.fullname}  </h3>
								<div className = {Number(viewer) === Number(d.from_user) ? "from-bubble-active" : "from-bubble"}>
									<p className = "from-message"> {d.content} </p>
								</div> */}
							</ListItem>
							{/* <Divider variant='fullWidth' /> */}
						</div>
					)
				}
			</List>

			<div className={chatStyles.inputOuterContainer}>
				<Divider variant='fullWidth' />
				<form
					className={chatStyles.inputInnerContainer}
					onSubmit={e => {
						e.preventDefault()
						handleClick(e, props.addMessages)
					}}
				>
					<InputBase
						className={chatStyles.input}
						placeholder="Send Message"
						onChange ={handleChange}
						value= {value} />
					<IconButton onClick={(e) => handleClick(e, props.addMessages)} className={"submit-chat-button"} aria-label="Search">
						<SendIcon />
					</IconButton>
				</form>
			</div>
		</>
	)
}

export default MessageInput