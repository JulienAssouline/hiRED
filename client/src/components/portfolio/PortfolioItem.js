import React, { useState } from 'react'

import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'

import PortfolioEditItem from './PortfolioEditItem'
import PortfolioDeleteItemModal from './PortfolioDeleteItemModal'

const PortfolioItemView = (props) => {
	const { data, refetch } = props
	const { id, title, description, type, custom_link, api_link, thumbnail } = data
	const [editModalState, setEditModalState] = useState(false)
	const [deleteModalState, setDeleteModalState] = useState(false)

	const handleOpenEditModal = () => {
		setEditModalState(true)
	}

	const handleCloseEditModal = () => {
		setEditModalState(false)
		refetch()
	}

	const handleOpenDeleteModal = () => {
		setDeleteModalState(true)
	}

	const handleCloseDeleteModal = () => {
		setDeleteModalState(false)
		refetch()
	}

  return (
  	<>
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
						action={
							<div>
								<Button className='edit-portfolio-item' onClick={handleOpenEditModal}>
									edit
								</Button>
								<Button className='delete-portfolio-item' onClick={handleOpenDeleteModal}>
									Delete
								</Button>
							</div>
						}
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

			<PortfolioEditItem
				modalState={editModalState}
				closeModal={handleCloseEditModal}
				portfolioData={data}
			/>

			<PortfolioDeleteItemModal 
				modalState={deleteModalState}
				closeModal={handleCloseDeleteModal}
				title={title}
				id={id}
			/>
		</>
  )
}

export default PortfolioItemView;
