import React from 'react'

import { CardContent, CardHeader, Typography } from '@material-ui/core'

const UserBasicInfoSection = props => {
	const { email, currentJob, location } = props

	return (
		<CardContent className='card-section'>
			<CardHeader
				className='section-name'
				title={
					<h4>Basic Info</h4>
				}
			/>
			<section className='section-content'>
				<Typography paragraph>
					<span className='profile-info-title'>Email: </span>{email}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Current Job: </span>{currentJob}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Location: </span>{location}
				</Typography>
			</section>
		</CardContent>
	)
}

export default UserBasicInfoSection