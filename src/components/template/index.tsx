import styled from "styled-components";
import React from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

const ContentStyle = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 225px 1fr;
    grid-template-areas: 'menu menu' 'side content';
    background-color: #d4dbf8;
    @media(max-width: 768px){
      grid-template-columns: 50px 1fr
    }
`;



const ContentArea = styled.div`
    grid-area: content;
    display: flex;
`
const Content: React.FC = ({ children }) => {
	return (
		<ContentStyle>
			<Sidebar />
			<Menu />
			<ContentArea>
				{children}
			</ContentArea>
		</ContentStyle>
	)
};

export default Content;