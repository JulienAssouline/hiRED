import React, { useState } from 'react'

import { Fade, Link, Menu, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import PopupLoginForm from '../login/PopupLoginForm'

import landing from '../../css/landing/landing.module.css'

const TempTopNavLanding = () => {
	const [formType, setFormType] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const handleSwapForm = () => {
		setFormType(!formType)
	}

	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleCloseMenu = () => {
		setAnchorEl(null)
	}

	return (
		<div className={landing.topNav}>
			<Link color='secondary' onClick={handleClick}>
				<Typography paragraph>
					Login 
					<FontAwesomeIcon icon={faSignInAlt} />
				</Typography>
			</Link>
			<Menu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
				TransitionComponent={Fade}
			>
				<PopupLoginForm handleSwapForm={handleSwapForm} />
			</Menu>
			<Link href='https://redacademy.com' color='secondary'>
				<Typography paragraph>
					Red Academy
				</Typography>
			</Link>
		</div>
	)
}

export default TempTopNavLanding