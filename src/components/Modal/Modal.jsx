import React, {
	useRef, useContext, useState, useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const Context = React.createContext();

export function ModalProvider({ children }) {
	const modalRef = useRef();
	const [context, setContext] = useState();

	// make sure re-render is triggered after initial
	// render so that modalRef exists
	useEffect(() => {
		setContext(modalRef.current);
	}, []);

	return (
		<Container>
			<Context.Provider value={context}>{children}</Context.Provider>
			<div ref={modalRef} />
		</Container>
	);
}

export function Modal({ onClose, children, ...props }) {
	const modalNode = useContext(Context);

	return modalNode
		? ReactDOM.createPortal(
			<Overlay onClick={onClose}>
				<Dialog {...props}>
					<div>
						{children}
					</div>
					<ButtonStyled onClick={onClose}> X </ButtonStyled>
				</Dialog>
			</Overlay>,
			modalNode,
		)
		: null;
}

const fadeIn = keyframes`from { opacity: 0; }`;

const Container = styled.div`
  position: relative;
  z-index: 0;
`;

const Overlay = styled.div`
  animation: ${fadeIn} 200ms ease-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

const Dialog = styled.div`
  background: transparent;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const ButtonStyled = styled.button`
    margin: 20px;
    height: 42px;
    width: 42px;
    background: ${(props) => props.theme.colors.forestGreen};
	color: #ffffff;
    border: none;
    border-radius: 20px;
	font-size: 22px;
    :hover {
        background-color: ${(props) => props.theme.colors.highlight};
        color: black;
		border: 2px solid ${(props) => props.theme.colors.forestGreen};
    }
`;
