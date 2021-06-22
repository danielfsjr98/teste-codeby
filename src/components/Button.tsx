import styled from "styled-components";
import React from "react";

interface IButton {
  text: string;
  onClick: () => void;
  padding?: string;
  border?: string;
  bgColor?: string;
  width?: string
  radius?: string;
  color?: string;
}
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
	padding: ${(props: IButton) => props.padding && props.padding};
  border: ${(props: IButton) => props.border ? props.border : "none"};
  border-radius: ${(props: IButton) => props.radius && props.radius};
  background-color: ${(props: IButton) => props.bgColor && props.bgColor};
  width: ${(props: IButton) => props.width && props.width};
  color: ${(props: IButton) => props.color && props.color};
`;

const Button: React.FC<IButton> = props => {
  const { text } = props
	return (
		<StyledButton {...props}>
      { text }
		</StyledButton>
	)
};
export default Button;