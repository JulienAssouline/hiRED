import React, { useState } from 'react'

import { Card, Typography } from '@material-ui/core'

import TempTopNavLanding from '../navigation/TempTopNavLanding'
import SignupForm2 from '../signup/SignupForm2'

import landing from '../../css/landing/landing.module.css'
import signupForm2 from '../../css/landing/signup2.module.css'

const LandingTemp = props => {
	const [formType, setFormType] = useState(false)

	const handleSkip = () => {
		props.history.push('/')
		window.location.reload()
	}

	return (
		<div className={landing.mainContainer}>
			<TempTopNavLanding />

			<Card className={signupForm2.mainContainer}>
				<Typography variant='h2'>
					Tell us more about yourself
				</Typography>
				<SignupForm2 {...props} />
				<div className={signupForm2.skipSignup2} onClick={handleSkip}>
					<Typography paragraph>
						No thanks, just take me to the App
					</Typography>
				</div>
			</Card>
		</div>
	)
}

export default LandingTemp