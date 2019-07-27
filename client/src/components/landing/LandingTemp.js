import React from 'react'

import { Card, Typography } from '@material-ui/core'

import SignupForm from '../signup/SignupForm'

import landing from '../../css/landing/landing.module.css'

const LandingTemp = props => {
	return (
		<div className={landing.mainContainer}>
			<div className={landing.message}>
				<Typography variant='h1' align='left'>
					Connect with hundreds of other Red Alumni
				</Typography>
			</div>
			<Card className={landing.signupCard}>
				<Typography variant='h4' align='center'>
					Sign up now
				</Typography>
				<SignupForm {...props} />
			</Card>
		</div>
	)
}

export default LandingTemp