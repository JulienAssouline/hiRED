import React from 'react'

import { useQuery } from 'react-apollo-hooks'
import { GET_PORTFOLIO_QUERY } from '../../graphql-queries/profileQueries'

import PortfolioItem from './PortfolioItem'




const Portfolio = () => {
	const { data, loading, error, refetch } = useQuery(GET_PORTFOLIO_QUERY)

	if (loading) return <div>Loading...</div>

	if (error) return <div>Error!</div>

	let userPortfolioComponents = data.getUserPortfolio.map(portfolioItem => 
		<PortfolioItem 
			key={portfolioItem.id}
			data={portfolioItem}
			refetch={refetch}
		/>
	)
  return (
		<div>
			<h1>Portfolio</h1>      
			{userPortfolioComponents}
		</div>
  )
}

export default Portfolio