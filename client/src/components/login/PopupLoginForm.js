import React from 'react'

import { Typography } from '@material-ui/core'

import TempLoginForm from './TempLoginForm'

import popupLogin from '../../css/landing/popupLogin.module.css'

const PopupLogin = props => {
	return (
		<div className={popupLogin.container}>
			<Typography variant='h4'>
				Login To hiRED
			</Typography>
			<TempLoginForm {...props} />
		</div>
	)
}

export default PopupLogin