import React from 'react'

import { useQuery } from 'react-apollo-hooks';
import { GET_REDBOOK_USERS } from '../../graphql-queries/queries'

import '../../css/redbook.css'

import RoleFilledUser from "./RoleFilledUser"
import UnknownRoleUser from "./UnknownRoleUser"

const Redbook = props => {

  const {data, error, loading} = useQuery(GET_REDBOOK_USERS);

	const handleGoToUser = userId => {
		props.history.push(`/users${userId}`, userId)
	}

  if (loading) return <div>Loading...</div>;
  if (error) return <div>I have an error</div>

  return (
    <div className = "redbook-page-container">
      <div className = "redbook-cards-container">
        {
          data.getRedBookUsers.map((d,i) =>
						d.role
							? <RoleFilledUser
								key = {i}
								data = {d}
								handleGoToUser={handleGoToUser}
							/> 
							: <UnknownRoleUser
								key = {i}
								data = {d}
								handleGoToUser={handleGoToUser}
							/>
          )
        }
      </div>
    </div>
  );
}

export default Redbook