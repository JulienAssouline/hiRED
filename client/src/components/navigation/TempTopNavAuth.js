import React from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Avatar, Link, Toolbar, Typography, Button } from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faComments, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons'

import topNav from '../../css/navigation/topNav.module.css'

const TempTopNavAuth = props => {
	const { userData } = props

	return (
		<AppBar className={topNav.mainContainer} position='static'>
			<Toolbar className={topNav.container}>
				<div>
					<Link className={topNav.links} to='/' component={RouterLink} color='secondary'>
						<Typography className={topNav.home} variant='h6'>
							hi<span>RED</span>
						</Typography>
					</Link>
				</div>

				<div className={topNav.navContainer}>
					<Link to='/' component={RouterLink}>
						<div className={topNav.redbook}>
							<Avatar className={topNav.icon}>
								<FontAwesomeIcon icon={faBook} />
							</Avatar>
							<Typography variant='h6'>
								Redbook
							</Typography>
						</div>
					</Link>

					<Link to='/mentors' component={RouterLink}>
						<div className={topNav.mentor}>
							<Avatar className={topNav.icon}>
								<FontAwesomeIcon icon={faGraduationCap} />
							</Avatar>
							<Typography variant='h6'>
								Mentor
							</Typography>
						</div>
					</Link>

					<Link to='/chatbot' component={RouterLink}>
						<Avatar className={topNav.icon} to='/'>
							<FontAwesomeIcon icon={faComments} />
						</Avatar>
					</Link>

					<Link to='/profile' component={RouterLink}>
						<Avatar className={topNav.icon} src={userData.avatar}>
							<FontAwesomeIcon icon={faUser} />
						</Avatar>
					</Link>


					{/* TODO - FIX STYLING AND UNCOMMENT WHEN READY */}
					{/* <Link to='/logout' component={RouterLink}>
						<div className={topNav.mentor}>
							<Avatar className={topNav.icon}>
								<FontAwesomeIcon icon={faGraduationCap} />
							</Avatar>
							<Typography variant='h6'>
								Logout
							</Typography>
						</div>
					</Link> */}

				</div>
			</Toolbar>
		</AppBar>
	)
}

export default TempTopNavAuth