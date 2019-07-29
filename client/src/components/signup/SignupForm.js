import React, { useState } from 'react'

import { Formik } from 'formik'
import { signupValidation } from '../../validationSchemas'

import { useMutation } from 'react-apollo-hooks'
import { SIGNUP } from '../../graphql-queries/signupLoginQueries'
import { withRouter } from 'react-router'

import { TextField, Button, FormHelperText, Typography } from '@material-ui/core'

import signupForm from '../../css/landing/signup.module.css'

const SignupForm = props => {
	const signup = useMutation(SIGNUP)
	const [emailTaken, setEmailTaken] = useState(false)
	
	const initialValues = {
		userEmail: '',
		userFullname: '',
		password: '',
		confirmPassword: '',
		inviteCode: '',
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const result = await signup({
						variables: {
							input: {
								email: values.userEmail,
								fullname: values.userFullname,
								password: values.password,
							},
						},
					})
					if (result.data.signup.message === 'success') {
						props.history.push('/signup2')
					}
				} catch(error) {
					setSubmitting(false)
					if (error.message === 'GraphQL error: This email has already been taken') {
						setEmailTaken(true)
					}
					throw error
				}
				setSubmitting(false)
			}}
			validationSchema={signupValidation}
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
					<form className={signupForm.form} onSubmit={handleSubmit}>
						<div className={signupForm.formField}>
							<TextField
								type='text'
								name='userEmail'
								label='Email'
								value={values.userEmail}
								onChange={handleChange}
								onBlur={handleBlur}
								margin='normal'
							/>
							{errors.userEmail && touched.userEmail 
								?	<FormHelperText className={signupForm.formError}>
									{errors.userEmail}
								</FormHelperText>
								:	<FormHelperText className={signupForm.formHelper} />
							}
						</div>

						<div className={signupForm.formField}>
							<TextField
								type='text'
								name='userFullname'
								label='Full Name'
								value={values.userFullname}
								onChange={handleChange}
								onBlur={handleBlur}
								margin='normal'
							/>
							{errors.userFullname && touched.userFullname ? (
								<FormHelperText className={signupForm.formError}>{errors.userFullname}</FormHelperText>
							) : (
								<FormHelperText className={signupForm.formHelper} />
							)}
						</div>

						<div className={signupForm.formField}>
							<TextField
								type='password'
								name='password'
								label='Password'
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								margin='normal'
							/>
							{errors.password && touched.password ? (
								<FormHelperText className={signupForm.formError}>{errors.password}</FormHelperText>
							) : (
								<FormHelperText className={signupForm.formHelper} />
							)}
						</div>

						<div className={signupForm.formField}>
							<TextField
								type='password'
								name='confirmPassword'
								label='Confirm Password'
								value={values.confirmPassword}
								onChange={handleChange}
								onBlur={handleBlur}
								margin='normal'
							/>
							{errors.confirmPassword && touched.confirmPassword ? (
								<FormHelperText className={signupForm.formError}>{errors.confirmPassword}</FormHelperText>
							) : (
								<FormHelperText className={signupForm.formHelper} />
							)}
						</div>

						{ emailTaken &&
							<Typography className={signupForm.emailTaken} paragraph>
								* Sorry, this email has been taken
							</Typography>
						}

						<section className={signupForm.formButtons}>
							<Button
								className='btn-submit'
								type='submit'
								variant='contained'
								color='primary'
								disabled={isSubmitting}
							>
								Sign Up
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

export default withRouter(SignupForm)
