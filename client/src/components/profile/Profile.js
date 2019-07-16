import React from 'react'

// import TopBar from '../navigation/TopBar'
// import LeftNav from '../navigation/LeftNav'
import ProfileCard from './ProfileCard'
import Portfolio from '../portfolio/Portfolio'
// import ProfileFilterPortfolio from './ProfileFilterPortfolio'

import '../../css/profile/generalProfile.css'
import '../../css/profile/editProfileModal.css'

const Profile = (props) => {
  return (
    <div className='profile'>
			{/* <TopBar /> */}
			<div className='container'>
				{/* <LeftNav {...props}/> */}
				<section className='profile-information'>
					{/* <ProfileFilterPortfolio /> */}
					<ProfileCard props={props} />
				</section>
				<Portfolio />
			</div>
    </div>
  )
}

export default Profile