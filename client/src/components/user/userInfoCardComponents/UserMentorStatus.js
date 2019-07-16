import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { CardHeader, Switch, Typography } from '@material-ui/core'

const UserMentorStatus = props => {
	const { fullname, mentor } = props

	return (
		<>
			<CardHeader
				className='section-name'
				title={
					<h4>Mentor Status</h4>
				}
			/>
			<div className='toggle-mentor-container'>
				<div className='mentor-item'>
					<div className='mentor-item-label'>
						<FontAwesomeIcon className='mentor-switch-icon' icon={faGraduationCap} />
						<Typography className='mentor-switch-text'>
							{fullname} {mentor && mentor.status ? 'is' : "isn't"} a mentor
						</Typography>
					</div>
					<Switch
						checked={mentor && mentor.status}
						color={'primary'}
					/>
				</div>
			</div>
		</>
	)
}

export default UserMentorStatus