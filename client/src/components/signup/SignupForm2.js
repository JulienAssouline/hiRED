import React from 'react'

import { useMutation } from 'react-apollo-hooks'
import { SIGNUP2 } from '../../graphql-queries/signupLoginQueries'

import { Formik } from 'formik'
import { signup2Validation } from '../../validationSchemas'
import { programs, campus, studyCohort, studyYear, roles } from '../../form-dropdown-values'

import { TextField, Button, MenuItem, FormControlLabel, FormLabel, Switch, FormHelperText, Typography } from '@material-ui/core'

import signupForm from '../../css/landing/signup.module.css'
import signupForm2 from '../../css/landing/signup2.module.css'

const initialFormValues = {
	whichCampus: '',
	whichRole: '',
	whichCareer: '',
	whichCareerLocation: '',
	whichLocation: '',
	whichProgram: '',
	whichStudyYear: '',
	whichStudyCohort: '',
	status: false,
}

const SignupForm2 = props => {
	const signup2 = useMutation(SIGNUP2)

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const result = await signup2({
						variables: {
							input: {
								campus: values.whichCampus,
								program_name: values.whichProgram,
								study_year: values.whichStudyYear,
								study_cohort: values.whichStudyCohort,
								role: values.whichRole,
								current_job: values.whichCareer,
								job_location: values.whichCareerLocation,
								location: values.whichLocation,
								mentor: values.status,
							},
						},
					})
					if (result.data.signupForm2.message === 'success') {
						props.history.push('/')
						window.location.reload()
					}
				} catch(error) {
					setSubmitting(false)
					throw error
				}

				setSubmitting(false)
			}}
			validationSchema={signup2Validation}
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
					<form className={`${signupForm.form} ${signupForm2.form}`} onSubmit={handleSubmit}>
						<div className={signupForm2.formContainer}>
							<div className={`${signupForm2.formSection} ${signupForm2.aboutSelf}`}>
								<Typography variant='h3'>
									More about you
								</Typography>

								<div className={signupForm.formField}>
									<TextField
										name='whichCareer'
										label='Career'
										value={values.whichCareer}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.userEmail && touched.userEmail 
										?	<FormHelperText className={signupForm.formError}>
											{errors.userEmail}
										</FormHelperText>
										:	<FormHelperText className={signupForm.formHelper}>
											What is your current job?
										</FormHelperText>
									}
								</div>

								<div className={signupForm.formField}>
									<TextField
										name='whichCareerLocation'
										label='Career Location'
										value={values.whichCareerLocation}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.userEmail && touched.userEmail 
										?	<FormHelperText className={signupForm.formError}>
											{errors.userEmail}
										</FormHelperText>
										:	<FormHelperText className={signupForm.formHelper}>
											Where is your job located?
										</FormHelperText>
									}
								</div>

								<div className={signupForm.formField}>
									<TextField
										name='whichLocation'
										label='City'
										value={values.whichLocation}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.userEmail && touched.userEmail 
										?	<FormHelperText className={signupForm.formError}>
											{errors.userEmail}
										</FormHelperText>
										:	<FormHelperText className={signupForm.formHelper}>
											Which city do you live in?
										</FormHelperText>
									}
								</div>

								<div className={`${signupForm.formField} ${signupForm2.mentor}`}>
									<FormLabel required component='legend'>
										{' '}
										Do you want to register as a mentor?{' '}
									</FormLabel>
									<FormControlLabel
										className='status toggle'
										control={
											<Switch
												id='status'
												checked={values.status ? (values.status = true) : (values.status = false)}
												onChange={handleChange}
												value={values.status}
												onBlur={handleBlur}
												margin='normal'
												color='primary'
											/>
										}
										label={values.status ? 'Yes' : 'Not yet'}
									/>
									<FormHelperText className={signupForm.formHelper}>
										* If you register, it means you want to make yourself available as a resource for current students and others wanting your advice
									</FormHelperText>
								</div>
							</div>
							
							<div className={signupForm2.formSection}>
								<Typography variant='h3'>
									Your time at Red
								</Typography>

								<div className={signupForm.formField}>
									<TextField
										select
										name='whichRole'
										label='Role'
										value={values.whichRole}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									>
										{roles.map(option => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
									{errors.userEmail && touched.userEmail 
										?	<FormHelperText className={signupForm.formError}>
											{errors.userEmail}
										</FormHelperText>
										:	<FormHelperText className={signupForm.formHelper}>
											Are you an alumni, student or staff?
										</FormHelperText>
									}
								</div>

								<div className={signupForm.formField}>
									<TextField
										select
										name='whichCampus'
										label='Campus'
										value={values.whichCampus}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									>
										{campus.map(option => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
									{errors.userEmail && touched.userEmail 
										?	<FormHelperText className={signupForm.formError}>
											{errors.userEmail}
										</FormHelperText>
										:	<FormHelperText className={signupForm.formHelper}>
											Which campus did you study at?
										</FormHelperText>
									}
								</div>

								<div className={signupForm.formField}>
									<TextField
										select
										name='whichProgram'
										label='Program'
										value={values.whichProgram}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									>
										{programs.map(option => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
									{errors.userEmail && touched.userEmail 
										?	<FormHelperText className={signupForm.formError}>
											{errors.userEmail}
										</FormHelperText>
										:	<FormHelperText className={signupForm.formHelper}>
											Which program did you study at RED?
										</FormHelperText>
									}
								</div>

								<div className={signupForm2.studyTime}>
									<div className={signupForm.formField}>
										<TextField
											select
											name='whichStudyYear'
											label='Study Year?'
											value={values.whichStudyYear}
											onChange={handleChange}
											onBlur={handleBlur}
											margin='normal'
										>
											{studyYear.map(option => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
										{errors.userEmail && touched.userEmail 
											?	<FormHelperText className={signupForm.formError}>
												{errors.userEmail}
											</FormHelperText>
											:	<FormHelperText className={signupForm.formHelper}>
												What year did you study at RED?
											</FormHelperText>
										}
									</div>

									<div className={signupForm.formField}>
										<TextField
											select
											name='whichStudyCohort'
											label='Cohort ?'
											value={values.whichStudyCohort}
											onChange={handleChange}
											onBlur={handleBlur}
											margin='normal'
										>
											{studyCohort.map(option => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
										{errors.userEmail && touched.userEmail 
											?	<FormHelperText className={signupForm.formError}>
												{errors.userEmail}
											</FormHelperText>
											:	<FormHelperText className={signupForm.formHelper}>
												Which cohort did you study in?
											</FormHelperText>
										}
									</div>
								</div>

							</div>
						</div>
						
						<section className={signupForm.formButtons}>
							<Button
								className='btn-submit'
								type='submit'
								variant='contained'
								color='primary'
								disabled={isSubmitting}
							>
								Finish Signup
							</Button>
							<Button className='btn-reset' type='button' disabled={!dirty || isSubmitting} onClick={handleReset}>
								Reset
							</Button>
						</section>
					</form>
				)
			}}
		</Formik>
	)
}

export default SignupForm2
