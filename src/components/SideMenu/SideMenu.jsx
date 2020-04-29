import React, { useState } from 'react';
import styled from 'styled-components';

import MenuElement from './MenuElement';

// Image import
import noteSVG from '../../assets/icons/note.svg';
// import labelSVG from '../../assets/icons/tag.svg';
// import editSVG from '../../assets/icons/edit.svg';
import archiveSVG from '../../assets/icons/archive.svg';
import trashSVG from '../../assets/icons/trash.svg';

// Background-color: lightcoral
const NavStyle = styled.div`
  flex: 1;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.highlight};
`;

const menuList = [
	{
		image: noteSVG,
		text: 'Note',
	},
	/*
	{
		image: labelSVG,
		text: 'Label',
	},
	{
		image: editSVG,
		text: 'Edit labels',
	},
	*/
	{
		image: archiveSVG,
		text: 'Archive',
	},
	{
		image: trashSVG,
		text: 'Trash',
	},
];

function SideMenu({ settingView }) {
	const [activeItem, setActiveItem] = useState(0);

	const clickHandler = (index) => (e) => {
		e.preventDefault();
		setActiveItem(index);
		settingView(index);
	};

	const menuElementList = menuList.map((element, index) => {
		return (
			<MenuElement
				key={index}
				options={element}
				active={index === activeItem ? true : false}
				index={index}
				handler={clickHandler}
			/>
		);
	});

	return (
		<NavStyle>
			{menuElementList}
		</NavStyle>
	);
}

export default SideMenu;
