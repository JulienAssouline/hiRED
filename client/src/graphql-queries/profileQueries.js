import gql from 'graphql-tag'

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