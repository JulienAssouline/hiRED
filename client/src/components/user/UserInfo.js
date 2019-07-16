import React from 'react'

import { useQuery } from 'react-apollo-hooks'
import { GET_USER_PROFILE } from '../../graphql-queries/profileQueries'

import { Card, Divider } from '@material-ui/core'

import UserInfoHeader from './userInfoCardComponents/UserInfoHeader'
import UserBasicInfoSection from './userInfoCardComponents/UserBasicInfoSection'
import UserRedAcademySection from './userInfoCardComponents/UserRedAcademySection'
import UserMentorStatus from './userInfoCardComponents/UserMentorStatus'

const UserInfo = props => {
	const { data, loading, error } = useQuery(GET_USER_PROFILE, {
		variables: {user_id: props.match.params.userId}
	})

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error!</div>

	return (
		<Card className='profile-card'>
			<UserInfoHeader
				fullname={data.getUserProfile.fullname}
				programName={	data.getUserProfile.getPrograms.length
					? data.getUserProfile.getPrograms[0].name
					: ''}
				description={data.getUserProfile.description}
			/>

			<Divider variant='middle' />

			<UserBasicInfoSection
				email={data.getUserProfile.email}
				currentJob={data.getUserProfile.current_job}
				location={data.getUserProfile.location}
			/>

			<UserRedAcademySection
				campus={data.getUserProfile.campus}
				programName={data.getUserProfile.getPrograms.length ? data.getUserProfile.getPrograms[0].name : ''}
				studyYear={data.getUserProfile.study_year}
				studyCohort={data.getUserProfile.study_cohort}
			/>

			<Divider variant='middle' />

			<UserMentorStatus
				fullname={data.getUserProfile.fullname}
				mentor={data.getUserProfile.getMentor}
			/>
		</Card>
	)
}

export default UserInfo