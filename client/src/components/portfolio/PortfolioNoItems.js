import React from 'react'

import { Typography } from '@material-ui/core'

import portfolio from '../../css/profile/portfolio.module.css'

const PortfolioNoItems = () => {
	return (
		<div className={portfolio.container}>
			<Typography className={portfolio.noItems} variant='h5'>
				Show your awesome projects and showpieces to the Red community. Click Add Item to get started.
			</Typography>
		</div>
	)
}

export default PortfolioNoItems 