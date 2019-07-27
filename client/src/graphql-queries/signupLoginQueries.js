import gql from 'graphql-tag'

export const SIGNUP = gql`
	mutation signupVars($input: SignupObject!) {
		signup(input: $input) {
			message
		}
	}
`