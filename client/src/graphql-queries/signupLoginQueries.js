import gql from 'graphql-tag'

export const SIGNUP = gql`
	mutation signupVars($input: SignupObject!) {
		signup(input: $input) {
			message
		}
	}
`

export const SIGNUP2 = gql`
	mutation signupForm2Vars($input: SignupForm2Object!) {
		signupForm2(input: $input) {
			message
		}
	}
`

export const LOGIN = gql`
  mutation loginVars($input: LoginObject!){
    login(input: $input) {
      message
    }
  }
`