import React from 'react'

import { Card, Link, Typography } from '@material-ui/core'

import SignupForm from '../signup/SignupForm'

import landing from '../../css/landing/landing.module.css'

const SignupCard = props => {
	const { handleSwapForm } = props

	return (
		<Card className={landing.signupCard}>
			<Typography variant='h4' align='center'>
				Sign up now
			</Typography>
			<SignupForm {...props} />
			<Typography paragraph className={landing.formSwap}>
				Already have an account? <Link onClick={handleSwapForm}>Log in.</Link>
			</Typography>
		</Card>
	)
}

export default SignupCard