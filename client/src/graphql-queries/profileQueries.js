import gql from 'graphql-tag'

/*
=========================
Profile
=========================
*/

export const GET_FULL_PROFILE_QUERY = gql`
	query {
    getUserProfile {
      id
      email
      fullname
			description
      campus
      location
      role
      current_job
      avatar
      study_year
      study_cohort
      getPrograms {
        id
        name
      }
      getMentor {
        status
        # disabled
      }
    }
  }
`

export const GET_USER_PROFILE = gql`
	query getUserProfile($user_id: ID){
		getUserProfile(user_id: $user_id) {
			id
			email
			fullname
			description
			campus
			location
			role
			current_job
			avatar
			study_year
			study_cohort
			getPrograms {
        id
        name
      }
			getMentor {
        status
        # disabled
      }
		}
	}
`

/*
=========================
Portfolio
=========================
*/

export const GET_PORTFOLIO_QUERY = gql`
	query {
		getUserPortfolio {
			id
			user_id
			title
			description
			type
			custom_link
			api_link
			thumbnail
		}
	}
`

export const GET_USER_PORTFOLIO = gql`
	query getUserPortfolio($user_id: ID){
		getUserPortfolio(user_id: $user_id) {
			id
			user_id
			title
			description
			type
			custom_link
			api_link
			thumbnail
		}
	}
`

export const UPDATE_USER_PORTFOLIO = gql`
  mutation updateUserPortfolio($input: UpdateUserPortfolioInput!) {
    updateUserPortfolio(input: $input) {
      id
      user_id
      title
      description
      type
      custom_link
      api_link
      thumbnail
    }
  }
`

export const ADD_PORTFOLIO_ITEM = gql`
	mutation addUserPortfolio($input: AddUserPortfolioInput!) {
		addUserPortfolio(input: $input) {
			id
			user_id
			title
			description
			type
			custom_link
			api_link
			thumbnail
		}
	}
`

export const DELETE_PORTFOLIO_ITEM = gql`
	mutation deleteUserPortfolio($id: ID!) {
		deleteUserPortfolio(id: $id) {
			message
		}
	}
`

// deleteUserPortfolio(id: Int!): deleteUserPortfolioResponse!