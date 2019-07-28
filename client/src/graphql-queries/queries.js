import gql from 'graphql-tag';
import '../index.css';

export const testConnection = gql`
  query {
    getUser{
      id
    }
  }
`

export const listMyDribbbles = gql`
  query {
		listMyDribbbles {
			id
			title
			description
			height
			width
			html_url
			published_at
			updated_at
			images{
				hidpi
				normal
				one_x
				teaser
			}
		}
  }
`


export const isAuthenticated = gql`
	query {
		getUserProfile {
			id
			fullname
			avatar
		}
	}
`

export const AUTHENTICATION_STATUS = gql`
  query {
    checkAuthentication {
      id
      fullname
      message
    }
  }
`


export const getUserProfileQuery = gql`
  query {
    getUserProfile {
      id
      email
      fullname
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
    }
  }
`

export const getFullProfileQuery = gql`
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

export const GET_MESSAGES = gql`
  query GetMessages($number:ID){
    getMessages(conversation_id:$number){
      from_user
      content
      date_created
      fullname
      }
    }
  `

  export const GET_CONVERSATION = gql`
    query GetConversation($id: ID){
      getConversation(id: $id){
          id
          user_id_1
          user_id_2
       }
    }`

  export const GET_REDBOOK_USERS = gql`
    query {
      getRedBookUsers {
        id
        email
        password
        fullname
        description
        campus
        mentor
        location
        role
        programs
        current_job
        avatar
        study_year
        study_cohort
        job_location
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