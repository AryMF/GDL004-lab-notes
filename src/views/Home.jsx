import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';

import SideMenu from '../components/sideMenu/SideMenu.container';
import lightTheme from '../theme/light.theme';
import oldTheme from '../theme/old.theme';
import GlobalStyles from '../styles/globalStyles';
import Container from '../elements/Container.component';

import HeaderBar from '../components/navBar/HeaderBar.container';
import { Notes } from '../components/notes';

const MainStage = styled.div`
  position: absolute;
  top: 64px;
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: row;
`;

const Home = () => {
	let [darkTheme, setDarkTheme] = useState(true);

	const changeTheme = () => {
		setDarkTheme(!darkTheme);
	}

	return (
		<ThemeProvider theme={darkTheme ? oldTheme : lightTheme}>
			<GlobalStyles />
			<Container>
			<HeaderBar configButtonAction={changeTheme}/>
			<MainStage>
				<SideMenu />
				<Notes/>
			</MainStage>
			</Container>
		</ThemeProvider>
	);
}

export default Home;
