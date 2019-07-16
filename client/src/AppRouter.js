import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { useQuery } from 'react-apollo-hooks'
// import { isAuthenticated } from './graphql-queries/queries'

import Landing from "./components/landing/Landing";

import Signup from "./components/signup/Signup";
import MyDribbbles from "./components/signup/MyDribbbles";
import Login from "./components/login/Login";
import SignupForm2 from "./components/signup/SignupForm2";
import SignupForm3 from "./components/signup/SignupForm3";
import Mentors from "./components/mentors/Mentors";
import Skills from "./components/skills/Skills";
import Chatbot from "./components/chat/Chatbot";
import Messages from "./components/chat/Messages";
import Home from "./components/feed/Home";
import TopNavNotLoggedIn from "./components/navigation/TopNavNotLoggedIn";
import Redbook from "./components/redbook/Redbook";
import TopNavLoggedIn from "./components/navigation/TopNavLoggedIn";

import Profile from './components/profile/Profile'
import User from './components/user/User'
import Chat from "./components/chat/Chat"

const AppRouter = () => {
	// const

  let loggedIn = true;

  return (
    <Router>
      {loggedIn ? <TopNavLoggedIn /> : <TopNavNotLoggedIn />}

      <Route path="/" exact component={Landing} />

      <Route path="/landing/" exact component={Landing} />

      <Route path="/signup/" exact component={Signup} />
      <Route path="/signup2/" exact component={SignupForm2} />
      <Route path="/signup3/" exact component={SignupForm3} />
      <Route path="/login/" exact component={Login} />
      <Route path="/mydribbbles/" exact component={MyDribbbles} />

      <Route path="/Home/" exact component={Home} />
      <Route path="/redbook/" exact component={Redbook} />
      <Route path="/mentors/" exact component={Mentors} />
      <Route path="/chatbot/" exact component={Chat} />
      <Route path="/chat/" exact component={Chatbot} />
      <Route path="/skills/" exact component={Skills} />
      <Route path="/messages:conversation/" exact component={Messages} />

      <Route path='/profile/' exact component={Profile} />
			<Route path='/user/:userId' exact component={User} />
    </Router>
  );
};

export default AppRouter;
