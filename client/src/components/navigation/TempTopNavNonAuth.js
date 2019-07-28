import React from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core'

import topNav from '../../css/navigation/topNav.module.css'

const TempTopNavNonAuth = () => {
	return (
		<AppBar className={topNav.mainContainer} position='static'>
			<Toolbar>
				<div>
					<Link className={topNav.links} to='/' component={RouterLink} color='secondary'>
						<Typography variant='h6'>
							hiRED
						</Typography>
					</Link>
				</div>
				<div>
					<Link className={topNav.links} to='/' component={RouterLink} color='secondary'>
						<Typography variant='h6'>
							Login
						</Typography>
					</Link>
					<Link className={topNav.links} href='https://redacademy.com' color='secondary'>
						<Typography variant='h6'>
							Red Academy
						</Typography>
					</Link>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default TempTopNavNonAuth