import React from 'react'

import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { updateProfileMutation } from '../../graphql-queries/mutations'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardHeader, FormHelperText, Modal, TextField } from '@material-ui/core'

const ProfileBasicInfoModal = props => {
	const { modalState, closeModal } = props
	const { email, currentJob, location } = props

	const updateProfile = useMutation(updateProfileMutation)

	const initialFormValues = {
		editEmail: email,
    editCurrentJob: currentJob,
    editLocation: location,
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
						<h3>Edit Basic Information</h3>
					}
				/>
				
				<Button className='close-modal' onClick={closeModal}>
					<FontAwesomeIcon icon={faTimes} />
				</Button>

				<Formik
					initialValues={initialFormValues}
					onSubmit={async (values, { setSubmitting }) => {
						try {
							await updateProfile({
								variables: {input: {
									email: values.editEmail,
									current_job: values.editCurrentJob,
									location: values.editLocation,
								}}
							})
							closeModal()
						} catch(err) {
							throw err
						}
						setSubmitting(false)
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
										id='editEmail'
										name='editEmail'
										label='Email'
										value={values.editEmail}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.editEmail && touched.editEmail ? (
										<FormHelperText className='form-helper form-error'>
											{errors.editEmail}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											Your email
										</FormHelperText>
									)}
								</div>

								<div className='form-field'>
									<TextField
										id='editCurrentJob'
										name='editCurrentJob'
										label='Current Job?'
										value={values.editCurrentJob}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.editCurrentJob ? (
										<FormHelperText className='form-helper form-error'>
											{errors.editCurrentJob}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											What is your current job?
										</FormHelperText>
									)}                
								</div>

								<div className='form-field'>
									<TextField
										id='editLocation'
										name='editLocation'
										label='Address?'
										value={values.editLocation}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>

									{errors.editLocation ? (
										<FormHelperText className='form-helper form-error'>
											{errors.editLocation}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											What is your Address?
										</FormHelperText>
									)}
								</div>

								<section className='modal-form-btns'>
									<Button
										className='btn-submit'
										type='submit'
										variant='contained'
										color='primary'
										disabled={isSubmitting}
									>
										Save Changes
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

export default ProfileBasicInfoModal