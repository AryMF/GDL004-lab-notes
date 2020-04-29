import React from 'react';
import styled from 'styled-components';
import ButtonImage from '../ButtonImage/ButtonImage';
import image1 from '../../assets/icons/search.svg';

const InputStyle = styled.input`
    max-width: 720px;
    min-width: 200px;
    height: 46px;
    width: calc(100% - 96px);
    border: none;
    outline: none;
    background-color: transparent;

    ::placeholder {
        color: white;
    }
`;

const SearchDivStyle = styled.form`
    max-width: 816px;
    height: 48px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.highlight};
    display: flex;
    flex: 2;
    flex-direction: row !important;
`;

function SearchBar() {
	return (
		<SearchDivStyle>
			<ButtonImage
				altText='Search'
				imageRoute={image1}
				handdler={() => {alert('Hacer algo.');}}
				size='48px'
				margin='null'
			/>
			<InputStyle placeholder='Search'></InputStyle>
			<ButtonImage
				altText='Cancel'
				imageRoute={require('../../assets/icons/cancel.svg')}
				handdler={() => {alert('Hacer algo.')}}
				size='48px'
				margin='null'
			/>
		</SearchDivStyle>
	);
}

export default SearchBar;
