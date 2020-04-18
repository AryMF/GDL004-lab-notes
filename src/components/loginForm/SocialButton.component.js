import styled from 'styled-components';

export default styled.button `
    margin: 30px;
    height: 50px;
    width: 50px;
    background: transparent;
    border: none;
    border-radius: 100%;
    font-size: 22px;
    color: ${props => props.theme.colors.forestGreen};

    :hover {
        background-color: ${props => props.theme.colors.forestGreen};
        color: #ffffff;
    }
`;