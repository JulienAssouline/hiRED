import React from 'react'

import { Card, Link, Typography } from '@material-ui/core'

import TempLoginForm from '../login/TempLoginForm'

import landing from '../../css/landing/landing.module.css'

const LoginCard = props => {
	const { handleSwapForm } = props

	return (
		<Card className={landing.signupCard}>
			<Typography variant='h4' align='center'>
				Login to hiRED
			</Typography>
			<TempLoginForm {...props} />
			<Typography paragraph className={landing.formSwap}>
				Don't have an account yet? <Link onClick={handleSwapForm}>Sign up.</Link>
			</Typography>
		</Card>
	)
}

export default LoginCard