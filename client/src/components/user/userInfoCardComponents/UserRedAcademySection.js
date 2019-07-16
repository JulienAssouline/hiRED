import React from 'react'

import { CardContent, CardHeader, Typography } from '@material-ui/core'

const UserRedAcademySection = props => {
	const { campus, programName, studyYear, studyCohort} = props

	return (
		<CardContent className='card-section'>
			<CardHeader
				className='section-name'
				title={
					<h4>Red Academy</h4>
				}
			/>
			<section className='section-content'>
				<Typography paragraph>
					<span className='profile-info-title'>Campus: </span>{campus}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Programs: </span>{programName}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Study Year: </span>{studyYear}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Cohort: </span>{studyCohort}
				</Typography>
			</section>
		</CardContent>
	)
}

export default UserRedAcademySection