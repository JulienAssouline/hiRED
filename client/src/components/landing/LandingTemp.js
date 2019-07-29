import React, { useState } from 'react'

import { Typography } from '@material-ui/core'

import TempTopNavLanding from '../navigation/TempTopNavLanding'
import SignupCard from './SignupCard'
import LoginCard from './LoginCard'

import landing from '../../css/landing/landing.module.css'

const LandingTemp = () => {
	const [formType, setFormType] = useState(false)

	const handleSwapForm = () => {
		setFormType(!formType)
	}

	return (
		<div className={landing.mainContainer}>
			<TempTopNavLanding />

			<div className={landing.container}>
				<div className={landing.message}>
					<Typography variant='h1' align='left'>
						Connect with hundreds of other Red Alumni
					</Typography>
				</div>
				{	formType
					? <LoginCard handleSwapForm={handleSwapForm} />
					: <SignupCard handleSwapForm={handleSwapForm} />
				}
			</div>
		</div>
	)
}

export default LandingTemp