import gql from 'graphql-tag'

export const SIGNUP = gql`
	mutation signupVars($input: SignupObject!) {
		signup(input: $input) {
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