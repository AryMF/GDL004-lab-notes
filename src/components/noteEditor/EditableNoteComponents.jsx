import styled from 'styled-components';

export const DivTitle = styled.div`
	background-color: transparent;
	display: ${(props) => props.display};
`;

export const ContainerStyle = styled.article`
    width: 100%;
    height: fit-content;
    border: none;
    border-radius: 10px;
    margin: '0px';
	padding: 10px;
`;

export const InputStyle = styled.input`
    font-size: large;
    height: 46px;
    width: calc(100% - 68px);
    border: none;
    outline: none;
    margin: 5px;
    background-color: transparent;
`;

export const ButtonStyle = styled.button`
    height: 36px;
    width: 120px;
    border: 2px solid ${(props) => props.theme.colors.forestGreen};
    border-radius: 20px;
    margin: 0px 0px 10px 10px;
    font-size: 22px;
    background-color: transparent;

    :hover {
        background-color: ${(props) => props.theme.colors.forestGreen};
        color: snow;
    }
`;

export const RowAlignment = styled.div`
    display: ${(props) => props.display};
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;
