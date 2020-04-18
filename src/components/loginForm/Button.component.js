import styled from 'styled-components';

export default styled.button `
    margin: 20px;
    height: 42px;
    width: 122px;
    background: transparent;
    border: 2px solid ${props => props.theme.colors.forestGreen};
    border-radius: 20px;
    font-size: 22px;

    :hover {
        background-color: ${props => props.theme.colors.forestGreen};
        color: #ffffff;
    }
`;