import React from 'react'

import { useQuery } from 'react-apollo-hooks'
import { GET_USER_PORTFOLIO } from '../../graphql-queries/profileQueries'

import UserPortfolioItem from './UserPortfolioItem'

const UserPortfolio = props => {
	const { data, loading, error } = useQuery(GET_USER_PORTFOLIO, {
		variables: {user_id: props.match.params.userId}
	})

	if (loading) return <div>Loading...</div>

	if (error) return <div>Error!</div>

	return (
		<>
			<div className='portfolio-items-container'>
				{data.getUserPortfolio.map(portfolioItem => (
					<UserPortfolioItem
						key={portfolioItem.id}
						data={portfolioItem}
					/>
				))}
			</div>
		</>
	)
}

export default UserPortfolio