import styled from "styled-components";
import React from "react";
import LogoImage from "../../assets/codeby-logo.jpg";
import { useHistory } from "react-router-dom";

const MenuStyle = styled.div`
  grid-area: menu;
  display: flex;
  justify-content: center;
  background-color: #1c45f1;
  max-width: 100%;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 50%);
`;
const TitleStyle = styled.div`
  grid-area: title;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  h3{
    color: white;
    font-weight: 550;
    font-size: 24px;
  }
`;
const Logo = styled.img`
  max-height: 100%;
  cursor: pointer;
`;

const Menu: React.FC = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  }
  return (
    <MenuStyle>
      <TitleStyle>
        <Logo src={LogoImage}
          alt="logo-codeby"
          onClick={goToHome}
        />
      </TitleStyle>
    </MenuStyle>
  )
};
export default Menu;