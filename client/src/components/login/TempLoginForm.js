import React, { useState } from 'react'

import { Formik } from 'formik'
import { loginValidation } from '../../validationSchemas'

import { useMutation } from 'react-apollo-hooks'
import { LOGIN } from '../../graphql-queries/signupLoginQueries'

import { TextField, Button, FormHelperText, Typography } from '@material-ui/core'

import signupForm from '../../css/landing/signup.module.css'

const TempLoginForm = () => {
	const login = useMutation(LOGIN)
	const [incorrectLogin, setIncorrectLogin] = useState(false)

	const initialValues = {
		userEmail: '',
		password: '',
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const result = await login({
						variables: {
							input: {
								email: values.userEmail,
								password: values.password,
							},
						},
					})
					if (result.data.login.message === 'success') {
						window.location.reload()
					}
				} catch(error) {
					setIncorrectLogin(true)
					setSubmitting(false)
					throw error
				}

				setSubmitting(false)
			}}
			validationSchema={loginValidation}
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

						{incorrectLogin &&
							<Typography className={signupForm.emailTaken} paragraph>
								Incorrect Login Information
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
								Login
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

export default TempLoginForm