import styled from 'styled-components';

export default styled.input `
margin: 15px;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.capeCod};
    font-size: 20px;
    width: 60%;

    @media (max-width: 812px) {
        width: 70%;
    }
`;

