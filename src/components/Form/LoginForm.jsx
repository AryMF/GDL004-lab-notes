import React, { useState } from 'react';

import { Google } from '@styled-icons/fa-brands';
import BodyStyle from './FormBodyStyle';
import * as FormComponent from './StyleFormComponents';

function LoginForm({
	isSignUp, loginWithEmail, loginWithProvider, changeFormToShow,
}) {
	const [warning, setWarning] = useState(null);
	/*
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	*/
	const [inputArray, setinputArray] = useState({
		email: '',
		password: '',
		passwordConfirm: '',
	});

	const onChangeInputHanddler = (fieldToSet) => (event) => {
		setWarning(null);
		const arrayInfo = {
			email: fieldToSet === 'email' ? event.target.value : inputArray.email,
			password: fieldToSet === 'password' ? event.target.value : inputArray.password,
			passwordConfirm: fieldToSet === 'passwordConfirm' ? event.target.value : inputArray.passwordConfirm,
		};
		setinputArray(arrayInfo);
	};

	const resetInputValues = () => {
		setinputArray({
			email: '',
			password: '',
			passwordConfirm: '',
		});
	}

	const validateInput = (event) => {
		event.preventDefault();
		const { email, password, passwordConfirm } = event.target.elements;
		let validated = true;

		// Validate email format
		// eslint-disable-next-line no-useless-escape
		const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!email.value.match(mailformat)) {
			validated = false;
			setWarning('Email direction baddly formatted.');
		}

		// Validate password length
		if (password.value.length < 6) {
			validated = false;
			setWarning('Passwords must be at least 6 characters long.');
		}

		// Validate that password and password match
		if (passwordConfirm) {
			if (password.value !== passwordConfirm.value) {
				validated = false;
				setWarning('Password confirmation must match password.');
			}
		}

		if (validated) {
			resetInputValues();
			loginWithEmail(email.value, password.value);
		}
	};

	const sendProvider = (provider) => {
		loginWithProvider(provider);
	};

	const changeView = () => {
		resetInputValues();
		changeFormToShow();
	};

	return (
		<div>
			<BodyStyle />
			<FormComponent.ScreenContainer>
				<FormComponent.FormContainer>
					<h4> sign in </h4>
					<FormComponent.Title> memento</FormComponent.Title>
					<form onSubmit={validateInput}>
						{warning
							? (
								<FormComponent.WarningLabel>
									{ warning }
								</FormComponent.WarningLabel>
							)
							: null }
						<FormComponent.InputStyled
							name="email"
							placeholder="email"
							required
							value={inputArray.email}
							onChange={onChangeInputHanddler('email')}
						/>
						<FormComponent.InputStyled
							name="password"
							type="password"
							placeholder="password"
							required
							value={inputArray.password}
							onChange={onChangeInputHanddler('password')}
						/>
						{isSignUp === true
							? (
								<FormComponent.InputStyled
									name="passwordConfirm"
									type="password"
									placeholder="password confirmation"
									required
									value={inputArray.passwordConfirm}
									onChange={onChangeInputHanddler('passwordConfirm')}
								/>
							)
							: null }
						<FormComponent.ButtonStyled> log in </FormComponent.ButtonStyled>
					</form>
					<FormComponent.DivisionLine> or </FormComponent.DivisionLine>
					<div>
						<FormComponent.SocialButton onClick={() => { sendProvider('google'); }}>
							<Google />
						</FormComponent.SocialButton>
					</div>
					<p>
						{ isSignUp ? 'Already a member?' : 'Not a membre yet?' }
						<br />
						<FormComponent.LinkLabel onClick={changeView}>
							{isSignUp ? 'Sign in' : 'Create Account'}
						</FormComponent.LinkLabel>
					</p>
				</FormComponent.FormContainer>
			</FormComponent.ScreenContainer>
		</div>
	);
}

export default LoginForm;
