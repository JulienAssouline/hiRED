import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './components/landing/Landing'
import LandingTemp from './components/landing/LandingTemp'

import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import SignupForm2 from './components/signup/SignupForm2'
import SignupForm3 from './components/signup/SignupForm3'
import MyDribbbles from './components/signup/MyDribbbles'

import Profile from './components/profile/Profile'
import User from './components/user/User'

import Home from './components/feed/Home'
import Redbook from './components/redbook/Redbook'
import Mentors from './components/mentors/Mentors'
import Skills from './components/skills/Skills'
import Chatbot from './components/chat/Chatbot'
import Messages from './components/chat/Messages'

import TopNavNotLoggedIn from './components/navigation/TopNavNotLoggedIn'
import TopNavLoggedIn from './components/navigation/TopNavLoggedIn'

import { isAuthenticated } from './graphql-queries/queries'
import { useQuery } from 'react-apollo-hooks'

const AppRouter = () => {
	const [loggedInStatus, setLoggedInStatus] = useState(false)

	const { data: viewerData, loading, error } = useQuery(isAuthenticated)
	if (loading) return <div>Loading</div>
	if (error && error.message === 'GraphQL error: jwt must be provided') {
	} else if (error) {
		return <div>Error! {console.log('Error in approuter: ', error.message)}</div>
	}

	if (viewerData.getUserProfile === undefined) {
		return (
			<Router>
				<TopNavNotLoggedIn setLoggedInStatus={setLoggedInStatus} />
				<Switch>
					<Route path='/' exact component={LandingTemp} />
					<Route path='/landing/' exact component={LandingTemp} />
					<Route path='/signup/' exact component={Signup} />
					<Route path='/signup2/' exact component={SignupForm2} />
					<Route path='/signup3/' exact component={SignupForm3} />
					<Route path='/login/' exact component={Login} />
					<Route component={LandingTemp} />
				</Switch>
			</Router>
		)
	}

	return (
		<Router>
			<TopNavLoggedIn />
			<Switch>
				{/* <Route path='/signup/' exact component={Signup} /> */}
				<Route path='/signup2/' exact component={SignupForm2} />
				<Route path='/signup3/' exact component={SignupForm3} />
				<Route path='/login/' exact component={Login} />
				<Route path='/mydribbbles/' exact component={MyDribbbles} />

				<Route path='/Home/' exact component={Home} />
				<Route path='/redbook/' exact component={Redbook} />
				<Route path='/mentors/' exact component={Mentors} />
				<Route path='/chatbot/' exact component={Chatbot} />
				<Route path='/skills/' exact component={Skills} />
				<Route path='/messages:conversation/' exact component={Messages} />

				<Route path='/profile/' exact component={Profile} />
				<Route path='/user/:userId' exact component={User} />

				<Route component={Redbook} />
			</Switch>
		</Router>
	)
}

export default AppRouter
