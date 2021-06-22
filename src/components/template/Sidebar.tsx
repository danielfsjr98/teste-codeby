import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaCartArrowDown, FaHome, FaShoppingCart } from "react-icons/fa";

const SidebarStyle = styled.div`
  grid-area: side;
  background: #1c45f1;
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;
  height: 100%;
  width: 100%;
  a {
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    padding: 10px;
    padding-left: 35px;
    text-decoration: none;
    color: white;
    :hover{
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
  @media(max-width: 768px){
    a {
      display: flex;
      justify-content: center;
      height: 50px;
      width: 100%;
      align-items: center;
      padding-left: 0;
      padding: 10px;
      
      text-decoration: none;
      :hover{
        background-color: rgba(0, 0, 0, 0.25);
      }
      svg{
        width: 100%;
        height: 20px;
      }
    }
  }
`;

const activeClassName = 'nav-item-active'

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const Sidebar: React.FC = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <SidebarStyle>
      <StyledLink to="/" exact>
        <FaHome color="#FFF"/>
        { !isMobile && 
          <span style={{marginLeft: "8px"}}>
            Home
          </span>
        }  
      </StyledLink>
      <StyledLink to="/cart1" exact>
        <FaCartArrowDown color="#FFF"/>
        { !isMobile && 
          <span style={{marginLeft: "8px"}}>
            Carrinho 1
          </span>
        }  
      </StyledLink>
      <StyledLink to="/cart2" exact>
        <FaShoppingCart color="#FFF"/> 
        { !isMobile && 
          <span style={{marginLeft: "8px"}}>
            Carrinho 2 
          </span>
        }  
      </StyledLink>
    </SidebarStyle>
  )
};
export default Sidebar;