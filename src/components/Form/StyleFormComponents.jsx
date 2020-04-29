import styled from 'styled-components';

const WarningLabel = styled.label`
	color: ${(props) => props.theme.colors.forestGreen};
`;

const LinkLabel = styled.label`
	color: ${(props) => props.theme.colors.forestGreen};
	color: '#28A227';
	text-decoration: underline;
	cursor: pointer;
`;

const ButtonStyled = styled.button`
    margin: 20px;
    height: 42px;
    width: 122px;
    background: transparent;
    border: 2px solid ${(props) => props.theme.colors.forestGreen};
    border-radius: 20px;
	font-size: 22px;
    :hover {
        background-color: ${(props) => props.theme.colors.forestGreen};
        color: #ffffff;
    }
`;

const InputStyled = styled.input`
	margin: 15px;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.capeCod};
    font-size: 20px;
    width: 60%;

    @media (max-width: 812px) {
        width: 70%;
    }
`;

const DivisionLine = styled.p`
	margin: 0px;

	:before {
		content: '';
		display: inline-block;
		width: 120px;
		height: 1px;
		background: ${(props) => props.theme.colors.capeCod};
		position: relative;
		left: 0;
		top: 0%;
	}

	:after {
		content: '';
		display: inline-block;
		width: 120px;
		height: 1px;
		background: ${(props) => props.theme.colors.capeCod};
		position: relative;
		left: 0;
		top: 0px;
	}
`;

const SocialButton = styled.button`
	margin: 30px;
	height: 50px;
	width: 50px;
	background: transparent;
	border: none;
	border-radius: 100%;
	font-size: 22px;
	color: ${(props) => props.theme.colors.forestGreen};

	:hover {
		background-color: ${(props) => props.theme.colors.forestGreen};
		color: #ffffff;
	}
`;

const Title = styled.h1`
	color: ${(props) => props.theme.colors.forestGreen};
	font-size: 40px;
	margin: 5px 5px 45px;
`;


const FormContainer = styled.div`
	background: transparent;
	height: 75%;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	> form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media only screen and (orientation: landscape) {
		height: 80%;
		width: 40%;
	}
	@media (max-width: 812px) {
		height: 100vh;
		width: 100vw;
	}
`;

const ScreenContainer = styled.div`
	background: ${(props) => props.theme.colors.background};
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export {
	WarningLabel, LinkLabel, ButtonStyled, InputStyled,
	DivisionLine, SocialButton, Title, FormContainer, ScreenContainer,
};
