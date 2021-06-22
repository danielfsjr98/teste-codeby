import styled from "styled-components";
import React from "react";

const HomeStyle = styled.div`
	display: flex;
	flex-direction: column;
  min-width: 100%;
	padding: 20px;
  @media(max-width: 768px){
    min-width: 100%;
  }
`;
const StyledLink = styled.a`
	color: #000000;
	font-weight: 600;
	margin-left: 5px;
`;
const List = styled.div`
	display: flex;
	flex-direction: column;
`;
const SubTitle = styled.h3`
	font-size: 18px;
	margin-top: 20px;
`;

const Home: React.FC = () => {
	return (
		<HomeStyle>
			<h2>Bem vindo</h2>
			<span>
				Esse é um teste proposto pela empresa Codeby e desenvolvido pelo candidato Daniel Ferreira da Silva Junior.
			</span>

			<SubTitle>
				Projetos pessoais
			</SubTitle>
			<span>
				Conheça alguns dos meus projetos em 
				<StyledLink href="https://gitlab.com/users/danielfsjr98/projects" target="_blank"> 
					danielfsjr98
				</StyledLink>
			</span>
			
			<SubTitle>
				Alguns pontos extras em minha implementação:
			</SubTitle>
			<List>
				<span>
					-	Adicionado responsividade ao teste;
				</span>
				<span>
					-	Implementação do sidebar;
				</span>
				<span>
					-	Cálculo do valor total original - desconto;
				</span>
				<span>
					-	Template da aplicação baseada em display grid.
				</span>
			</List>

		</HomeStyle>
	)
};
export default Home;