import gql from 'graphql-tag'

export const signupMutation = gql`
	mutation signupVars($input: SignupObject!) {
		signup(input: $input) {
			message
		}
	}
`

export const ADD_MESSAGES = gql`
  mutation addMessagesMutation($content: String, $conversation_id: Int) {
    addMessages(content: $content, conversation_id: $conversation_id) {
      message
    }
  }
`

export const Add_Skills_MUTATION = gql`
  mutation addSkillsMutation($input: [skillsTags]) {
    addSkills(input: $input) {
      message
    }
  }
`

export const ADD_CONVERSATION_MUTATION = gql`
  mutation addConversationMutation($user_id_2: Int) {
    addConversation(user_id_2: $user_id_2) {
      id
    }
  }
`

export const signupForm2Mutation = gql`
	mutation signupForm2Vars($input: SignupForm2Object!) {
		signupForm2(input: $input) {
			message
		}
	}
`

export const loginMutation = gql`
  mutation loginVars($input: LoginObject!){
    login(input: $input) {
      message
    }
  }
`

export const LOGOUT = gql`
  mutation logout{
    message
  }
`

export const saveDribbbleCode = gql`
  mutation saveDribbbleCode($api_code: String) {
    saveDribbbleCode(api_code: $api_code)
	}
`

export const saveGithubCode = gql`
  mutation saveGithubCode($api_code: String) {
    saveGithubCode(api_code: $api_code)
	}
`

export const updateProfileMutation = gql`
  mutation updateVars($input: UpdateProfileObject!) {
    updateProfile(input: $input) {
      message
    }
  }
`

export const updateMentorMutation = gql`
	mutation updateVars($input: UpdateMentorObject!) {
		updateMentor(input: $input) {
			message
		}
	}
`

export const UPDATE_SELECTED_CONVERSATION = gql`
  mutation updateSelectedConversationMutation($conversation_id: Int, $current_conversation: Boolean) {
    updateSelectedConversation(conversation_id: $conversation_id, current_conversation: $current_conversation) {
      message
    }
  }
`