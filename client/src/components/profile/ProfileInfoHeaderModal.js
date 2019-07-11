import React, { useState, useEffect } from 'react'

import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { updateProfileMutation } from '../../graphql-queries/mutations'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardHeader, FormHelperText, MenuItem, Modal, TextField } from '@material-ui/core'

import { programs as programsOptions } from '../../form-dropdown-values'

const ProfileInfoHeaderModal = props => {
	const { modalState, closeModal, refetch } = props
	const { fullname, programName, description } = props

	const updateProfile = useMutation(updateProfileMutation)

	const initialFormValues = {
		editFullname: fullname,
		editProgram: programName,
		editDescription: description
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
						<h3>Edit Profile Overview</h3>
					}
					action={
						<Button onClick={closeModal}>
							<FontAwesomeIcon className='close-modal' icon={faTimes} />
						</Button>
					}
				/>
				<Formik
					initialValues={initialFormValues}
					onSubmit={async (values, { setSubmitting }) => {
						try {
							console.log('values', values)
							const result = await updateProfile({
								variables: {input: {
									fullname: values.editFullname,
									program_name: values.editProgram,
									description: values.editDescription,
								}}
							})
							refetch()
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
                    id='editFullname'
                    name='editFullname'
                    label='Fullname'
                    value={values.editFullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='normal'
                  />
                  {errors.editFullname && touched.editFullname ? (
                    <FormHelperText className='form-helper form-error'>
                      {errors.editFullname}
                    </FormHelperText>
                  ) : (
                    <FormHelperText className='form-helper'>
                      Your first and last name
                    </FormHelperText>
                  )}
                </div>

								<div className='form-field'>
                  <TextField
                    id='editProgram'
                    select
                    name='editProgram'
                    label='Program?'
                    value={values.editProgram}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText='Which program did you study at RED?'
                    margin='normal'
                  >
                    {programsOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

								<div className='form-field'>
                  <TextField
                    type='text'
                    id='editDescription'
                    name='editDescription'
                    label='Description'
                    value={values.editDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='normal'
                  />
                  {errors.editDescription && touched.editDescription ? (
                    <FormHelperText className='form-helper form-error'>
                      {errors.editDescriptions}
                    </FormHelperText>
                  ) : (
                    <FormHelperText className='form-helper'>
                      A short decription of yourself
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

export default ProfileInfoHeaderModal