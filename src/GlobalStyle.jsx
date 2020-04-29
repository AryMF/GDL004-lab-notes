import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
    background: transparent;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    color: ${(props) => props.theme.colors.capeCod};
    }

    h1, h4 {
        font-weight: bold;
        text-align: center;
    }

    h1 {
        font-size: 38px;
	}

    h4 {
        margin: 0px 15px 0px;
        font-size: 24px;
        font-weight: normal;
    }
`;
