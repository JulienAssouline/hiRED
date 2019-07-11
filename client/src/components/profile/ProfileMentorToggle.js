import React, { useState, useEffect } from 'react'

import { useMutation } from 'react-apollo-hooks'
import { updateMentorMutation } from '../../graphql-queries/mutations'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { CardHeader, Switch, Typography } from '@material-ui/core'

import '../../css/profile/toggleMentor.css'

const ProfileMentorToggle = props => {
	const { mentor } = props
	const updateMentor = useMutation(updateMentorMutation)
	const [mentorStatus, setMentorStatus] = useState(mentor ? mentor.status : false)
	const [updateStatus, setUpdateStatus] = useState(false)

	const handleSetMentorStatus = () => {
		setMentorStatus(!mentorStatus)
		setUpdateStatus(true)
	}

	useEffect(() => {
		try {
			if (updateStatus) {
				updateMentor({
					variables: {input: {
						status: mentorStatus,
					}}
				})
				setUpdateStatus(false)
			}
		} catch(err) {
			throw err
		}
	}, [mentorStatus, updateMentor, updateStatus])

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
						<Typography className='mentor-switch-text'>Be a Mentor</Typography>
					</div>
					<Switch
						checked={mentorStatus}
						onChange={handleSetMentorStatus}
						color={'primary'}
					/>
				</div>
			</div>
		</>
	)
}

export default ProfileMentorToggle