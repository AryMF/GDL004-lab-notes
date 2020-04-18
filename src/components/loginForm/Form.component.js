import styled from 'styled-components';

export default styled.div `
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