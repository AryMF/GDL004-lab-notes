import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import * as theme from '../theme/theme';
import GlobalStyle from '../GlobalStyle';

import { ModalProvider } from '../components/Modal/Modal';
import { HeaderBar } from '../components/HeaderBar';
import { SideMenu } from '../components/SideMenu';
import { Notes } from '../components/Notes';

const Container = styled.div`
	background: ${(props) => props.theme.colors.background};
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MainStage = styled.div`
  position: absolute;
  top: 64px;
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: row;
`;

function Home({ history }) {
	const [darkTheme, setDarkTheme] = useState(true);
	const [showMenu, setShowMenu] = useState(true);
	const [sectionActive, setSectionActive] = useState(0);

	const themeChangerHanddler = () => {
		setDarkTheme(!darkTheme);
	};

	const manageMenuState = () => {
		setShowMenu(!showMenu);
	};

	return (
		<ThemeProvider theme={darkTheme ? theme.old : theme.light}>
			<GlobalStyle />
			<ModalProvider>
				<Container>
					<HeaderBar manageMenuState={manageMenuState} themeChangerButton={themeChangerHanddler} />
					<MainStage>
						{showMenu ? <SideMenu settingView={setSectionActive} /> : null}
						<Notes sectionActive={sectionActive} />
					</MainStage>
				</Container>
			</ModalProvider>
		</ThemeProvider>
	);
}

export default Home;
