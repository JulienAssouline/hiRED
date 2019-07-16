import React from 'react'

import UserInfo from './UserInfo'
import UserPortfolio from './UserPortfolio'

const User = props => {

	return (
		<div className='profile'>
			<div className='container'>
				<section className='profile-information'>
					<UserInfo {...props} />
				</section>
				<UserPortfolio {...props} />
			</div>
		</div>
	)
}

export default User