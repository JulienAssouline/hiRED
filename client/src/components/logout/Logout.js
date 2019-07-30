import React from 'react'
import { useMutation } from 'react-apollo-hooks'
import { withApollo } from 'react-apollo'
import { gql } from 'graphql-tag'
import { LOGOUT } from '../../graphql-queries/mutations'

const Logout = () => {

  const logout = useMutation(LOGOUT)

  return (logout.message === 'logout successful') 
    ? <div>Logged out</div> 
    : <div>Please wait...</div>

}

export default withApollo(Logout)