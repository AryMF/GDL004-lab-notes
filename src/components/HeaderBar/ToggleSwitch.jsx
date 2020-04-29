import React, { useState } from 'react';
import styled from 'styled-components';

import { DropletHalf, Droplet } from '@styled-icons/boxicons-solid';

const ButtonStyle = styled.button`
    margin: 0px 15px;
    height: 46px;
    width: 46px;
    background: transparent;
    border: none;
    border-radius: 50%;
    outline: none;
    font-size: 22px;
    color: ${(props) => props.theme.colors.capeCod};

    :hover{
        background-color: ${(props) => props.theme.colors.highlight};
    }
`;

const DropletStyled = styled(Droplet)`
	width: 28px;
	height: 28px;
`;

const DropletHalfStyled = styled(DropletHalf)`
	width: 28px;
	height: 28px;
`;

function ToggleSwitch({ handdler }) {
	const [darkTheme, setDarkTheme] = useState(true);

	const onClickHanddler = () => {
		setDarkTheme(!darkTheme);
		handdler();
	};

	return (
		<ButtonStyle onClick={onClickHanddler}>
			{darkTheme
				? <DropletStyled />
				: <DropletHalfStyled />}
		</ButtonStyle>
	);
}

export default ToggleSwitch;
