import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,600');

    body {
    background: ${props => props.theme.colors.background};
    font-family: Poppins, sans-serif;
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    color: ${props => props.theme.colors.capeCod};
    }

    h1,
    h2,
    h3,
    h4 {
        font-weight: bold;
        text-align: center;
    }

    h1 {
        font-size: 38px;
    }
    
    h2 {
        font-size: 32px;
    }
    
    h3 {
        font-size: 28px;
    }
    
    h4 {
        margin: 0px 15px 0px;
        font-size: 24px;
        font-weight: normal;
    }
`;