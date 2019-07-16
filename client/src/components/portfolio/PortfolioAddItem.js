import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Card } from '@material-ui/core'

import PortfolioAddItemModal from './PortfolioAddItemModal'

const PortfolioAddItem = props => {
	const [modalState, setModalState] = useState(false)
	const { refetch } = props

	const handleOpenModal = () => {
		setModalState(true)
	}

	const handleCloseModal = () => {
		setModalState(false)
		refetch()
	}


	return (
		<>
			<Card
				className='portfolio-add-items-container'
				onClick={handleOpenModal}
			>
				<FontAwesomeIcon icon={faPlus} />
				<h3>Add Item</h3>
			</Card>

			<PortfolioAddItemModal
				modalState={modalState}
				closeModal={handleCloseModal}
			/>
		</>
	)
}

export default PortfolioAddItem