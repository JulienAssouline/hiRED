import React from 'react'

import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'

const UserPortfolioItem = props => {
	const { id, title, description, type, custom_link, api_link, thumbnail } = props.data

	return (
		<Card className='portfolio-card'>
			<CardMedia 
				className='portfolio-thumbnail'
				image={thumbnail}
				title={title}
			/>

			<CardContent>
				<CardHeader
					className='card-header'
					title={title}
				/>

				<Typography variant="subtitle1" color="textSecondary">
					Description: {description}
				</Typography>

				<Typography variant="subtitle1" color="textSecondary">
					Type: {type}
				</Typography>
				
				<Typography variant="subtitle1" color="textSecondary">
					Custom Link: {custom_link}
				</Typography>

				<Typography variant="subtitle1" color="textSecondary">
					API Link: {api_link}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default UserPortfolioItem