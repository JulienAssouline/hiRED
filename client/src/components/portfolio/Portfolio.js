import React from 'react'

import { useQuery } from 'react-apollo-hooks'
import { GET_PORTFOLIO_QUERY } from '../../graphql-queries/profileQueries'

import '../../css/profile/portfolio.css'

import PortfolioItem from './PortfolioItem'
import PortfolioAddItem from './PortfolioAddItem'
import PortfolioNoItems from './PortfolioNoItems'

const Portfolio = () => {
	const { data, loading, error, refetch } = useQuery(GET_PORTFOLIO_QUERY)

	if (loading) return <div>Loading...</div>

	if (error) return <div>Error!</div>

  return (
		<div>
			<PortfolioAddItem
				refetch={refetch}
			/>
			<div className='portfolio-items-container'>
				{ data.getUserPortfolio.length
					?	data.getUserPortfolio.map (portfolioItem => 
						<PortfolioItem 
							key={portfolioItem.id}
							data={portfolioItem}
							refetch={refetch}
						/>)
					: <PortfolioNoItems />
				}
			</div>
		</div>
  )
}

export default Portfolio