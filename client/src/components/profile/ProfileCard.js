import React from 'react'

import { useQuery } from 'react-apollo-hooks'
import { getFullProfileQuery } from '../../graphql-queries/queries'

import { Card, Divider } from '@material-ui/core'

import ProfileInfoheader from './ProfileInfoHeader'
import ProfileBasicInfoSection from './ProfileBasicInfoSection'
import ProfileRedAcademySection from './ProfileRedAcademySection'
import ProfilePassword from './ProfilePassword'
import ProfileMentorToggle from './ProfileMentorToggle'
import SocialIntegrations from './SocialIntegrations'
   
const ProfileCard = props => {
	const { data, loading, error } = useQuery(getFullProfileQuery)

	if (loading) return <div>loading...</div>
	if (error) return <div>error!</div>
	if (!data) return props.history.push('/login')

	return (
		<Card className='profile-card'>
			<ProfileInfoheader
				fullname={data.getUserProfile.fullname}
				programName={data.getUserProfile.getPrograms.length ? data.getUserProfile.getPrograms[0].name : ''}
				description={data.getUserProfile.description}
			/>

			<Divider variant='middle' />

			<ProfileBasicInfoSection
				email={data.getUserProfile.email}
				currentJob={data.getUserProfile.current_job}
				location={data.getUserProfile.location}
			/>

			<ProfileRedAcademySection
				campus={data.getUserProfile.campus}
				programName={data.getUserProfile.getPrograms.length ? data.getUserProfile.getPrograms[0].name : ''}
				studyYear={data.getUserProfile.study_year}
				studyCohort={data.getUserProfile.study_cohort}
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