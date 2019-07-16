import React from 'react'

import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { ADD_PORTFOLIO_ITEM } from '../../graphql-queries/profileQueries'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardHeader, FormHelperText, Modal, TextField } from '@material-ui/core'

const PortfolioAddItemModal = props => {
	const { modalState, closeModal } = props

	const addPortfolioItem = useMutation(ADD_PORTFOLIO_ITEM)

	const initialFormValues = {
		title: '',
		description: '',
		type: '',
		custom_link: '',
		api_link: '',
		thumbnail: '',
	}

	return (
		<Modal
			className='edit-profile-modal'
			open={modalState}
			onClose={closeModal}	
		>
			<Card className='modal-card'>
				<CardHeader
					className='modal-header'
					title={
						<h3>Add New Portfolio Item</h3>
					}
				/>
				
				<Button className='close-modal' onClick={closeModal}>
					<FontAwesomeIcon icon={faTimes} />
				</Button>

				<Formik
					initialValues={initialFormValues}
					onSubmit={async (values, { setSubmitting }) => {
						try {
							await addPortfolioItem({
								variables: {input: {
									title: values.title,
									description: values.description,
									type: values.type,
									custom_link: values.custom_link,
									api_link: values.api_link,
									thumbnail: values.thumbnail,
								}}
							})
						} catch(err) {
							throw err
						}
						setSubmitting(false)
						closeModal()
					}}
				>
					{formikProps => {
						const {
							values,
							touched,
							errors,
							dirty,
							isSubmitting,
							handleChange,
							handleBlur,
							handleSubmit,
							handleReset,
						} = formikProps

						return (
							<form onSubmit={handleSubmit}>
								<div className='form-field'>
									<TextField
										type='text'
										id='title'
										name='title'
										label='Portfolio Title'
										value={values.title}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.title && touched.title ? (
										<FormHelperText className='form-helper form-error'>
											{errors.title}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											The title of your portfolio item.
										</FormHelperText>
									)}
								</div>

								<div className='form-field'>
									<TextField
										type='text'
										id='description'
										name='description'
										label='Portfolio Description'
										value={values.description}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.description && touched.description ? (
										<FormHelperText className='form-helper form-error'>
											{errors.description}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											A description of your portfolio item.
										</FormHelperText>
									)}
								</div>

								<div className='form-field'>
									<TextField
										type='text'
										id='type'
										name='type'
										label='Portfolio Type'
										value={values.type}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.type && touched.type ? (
										<FormHelperText className='form-helper form-error'>
											{errors.type}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											What type of portfolio item is it?
										</FormHelperText>
									)}
								</div>

								<div className='form-field'>
									<TextField
										type='text'
										id='custom_link'
										name='custom_link'
										label='Portfolio Custom Link'
										value={values.custom_link}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.custom_link && touched.custom_link
										? <FormHelperText className='form-helper form-error'>
												{errors.custom_link}
											</FormHelperText>
										: <FormHelperText className='form-helper'>
												The link to where we can find your portfolio item on the internet.
											</FormHelperText>
									}
								</div>

								<div className='form-field'>
									<TextField
										type='text'
										id='api_link'
										name='api_link'
										label='Portfolio Api Link'
										value={values.api_link}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.api_link && touched.api_link
										? <FormHelperText className='form-helper form-error'>
												{errors.api_link}
											</FormHelperText>
										: <FormHelperText className='form-helper'>
												Mark, I'm not sure what this field is for.
											</FormHelperText>
									}
								</div>

								<div className='form-field'>
									<TextField
										type='text'
										id='thumbnail'
										name='thumbnail'
										label='Portfolio Thumbnail Link'
										value={values.thumbnail}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.thumbnail && touched.thumbnail
										? <FormHelperText className='form-helper form-error'>
												{errors.thumbnail}
											</FormHelperText>
										: <FormHelperText className='form-helper'>
												The link to a thumbnail for your portfolio item.
											</FormHelperText>
									}
								</div>
								
								<section className='modal-form-btns'>
									<Button
										className='btn-submit'
										type='submit'
										variant='contained'
										color='primary'
										disabled={isSubmitting}
									>
										Add Item
									</Button>
									<Button
										className='btn-reset'
										type='button'
										disabled={!dirty || isSubmitting}
										onClick={handleReset}
									>
										Discard changes
									</Button>
								</section>
							</form>
						)
					}}

				</Formik>
			</Card>
		</Modal>
	)
}

export default PortfolioAddItemModal