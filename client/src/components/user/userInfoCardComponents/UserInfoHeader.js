import React from 'react'

import { Avatar, CardHeader, CardContent, Typography } from '@material-ui/core'

const UserInfoHeader = props => {
	const { fullname, programName, description } = props
	
	return (
		<>
			<CardHeader
				avatar={
					<Avatar className='profile-avatar' />
				}
				title={
					<h3>{fullname}</h3>
				}
				subheader={
					<h5>{programName}</h5>
				}
			/>

			<CardContent className='profile-card-descript'>
				<Typography paragraph align='center'>{description}</Typography>
			</CardContent>
		</>
	)
}

export default UserInfoHeader