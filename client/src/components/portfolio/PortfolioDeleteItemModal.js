import React from 'react'

import { useMutation } from 'react-apollo-hooks'
import { DELETE_PORTFOLIO_ITEM } from '../../graphql-queries/profileQueries'

import { Button, Card, CardContent, CardHeader, Modal, Typography } from '@material-ui/core'

const PortfolioDeleteItemModal = props => {	
	const deletePortfolioItem = useMutation(DELETE_PORTFOLIO_ITEM)
	
	const { modalState, closeModal } = props
	const { id, title } = props

	const handleDeletePortfolioItem = async () => {
		try {
			await deletePortfolioItem({variables: {
				id: id,
			}})
		} catch(err) {
			throw err
		}
		closeModal()
	}

	return (
		<Modal
			className='edit-profile-modal'
			open={modalState}
			onClose={closeModal}
		>
			<Card className='modal-card'
			>
				<CardHeader
					className='modal-header'
					title={
						<h3>Delete {title}?</h3>
					}
				/>
				<CardContent>
					<Typography variant='body1'>
						Are you sure you want to delete <span className='portfolio-item-title'>{title}</span> from your profile?
					</Typography>
				</CardContent>
				
				<section className='delete-modal-form-btns'>
					<Button
						className='btn-delete'
						type='button'
						variant='contained'
						color='primary'
						onClick={handleDeletePortfolioItem}
					>
						Yes
					</Button>
					<Button
						className='btn-reset'
						type='button'
						variant='contained'
						color='secondary'
						onClick={closeModal}
					>
						No
					</Button>
				</section>
			</Card>
		</Modal>
	)
}

export default PortfolioDeleteItemModal