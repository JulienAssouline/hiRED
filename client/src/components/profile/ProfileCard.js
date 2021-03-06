import React from 'react'

import { useQuery } from 'react-apollo-hooks'
import { GET_FULL_PROFILE_QUERY } from '../../graphql-queries/profileQueries'

import { Card, Divider } from '@material-ui/core'
import { programs } from '../../util/programConversionTable'

import ProfileInfoheader from './ProfileInfoHeader'
import ProfileBasicInfoSection from './ProfileBasicInfoSection'
import ProfileRedAcademySection from './ProfileRedAcademySection'
import ProfilePassword from './ProfilePassword'
import ProfileMentorToggle from './ProfileMentorToggle'
import SocialIntegrations from './SocialIntegrations'

const ProfileCard = props => {
	const { data, loading, error, refetch } = useQuery(GET_FULL_PROFILE_QUERY)

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error!</div>

	return (
		<Card className='profile-card'>
			<ProfileInfoheader
				fullname={data.getUserProfile.fullname}
				programName={programs[data.getUserProfile.programs].label1}
				description={data.getUserProfile.description}
				refetch={refetch}
			/>

			<Divider variant='middle' />

			<ProfileBasicInfoSection
				email={data.getUserProfile.email}
				currentJob={data.getUserProfile.current_job}
				location={data.getUserProfile.location}
				refetch={refetch}
			/>

			<ProfileRedAcademySection
				campus={data.getUserProfile.campus}
				programName={programs[data.getUserProfile.programs].label1}
				studyYear={data.getUserProfile.study_year}
				studyCohort={data.getUserProfile.study_cohort}
				refetch={refetch}
			/>

			<ProfilePassword />

			<Divider variant='middle' />

			<ProfileMentorToggle
				mentor={data.getUserProfile.getMentor}
			/>

			<Divider variant='middle' />

			<SocialIntegrations />

		</Card>
	)
}

export default ProfileCard