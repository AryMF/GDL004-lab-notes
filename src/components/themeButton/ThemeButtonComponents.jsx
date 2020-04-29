import styled from 'styled-components';

export const ImageStyle = styled.img`
    height:24px;
    width:24px;
	display: ${(props) => props.display};
`;

export const ColorButton = styled.button`
	width: 40px;
	height: 40px;
	border: ${(props) => (props.border ? '1.5px solid' + props.theme.colors.highlight : 'none')};
	border-radius: 50%;
	margin: 5px;
	background-color: ${(props) => props.colorPos};
`;

export const Dropdown = styled.div`
	display: ${(props) => props.display};
	position: relative;
	top: -48px;
	right: 0px;
	width: 250px;
	height: fit-content;
	background-color: ${(props) => props.theme.colors.background};
	border: 1px solid ${(props) => props.theme.colors.highlight};
	flex-direction: row;
	flex-flow: wrap;
`;

export const ThemeButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: fit-content;
	width: 40px;
	background-color: transparent;
`;
