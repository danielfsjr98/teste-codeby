import styled from "styled-components";
import React from "react";
import { formatCurrency } from "../../utils";
import Button from "../Button";

interface ICard {
  title: string;
  total: number;
  totalizers: ITotalizer[];
  handleSale: () => void;
}
export interface ITotalizer {
	id: string;
	name: string;
	value: number;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 13px 4px rgba(0,0,0,0.5); 
  box-shadow: 0px 0px 13px 4px rgba(0,0,0,0.2);
  @media(max-width: 1000px){
    width: 100%;
  }
`;
const Label = styled.label`
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 26px;
  padding: 15px 0;
`;
const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #b9b9b9;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 15px;
`;
const FreeShipping = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #bffdab;
  color: #42882d;
  border-radius: 25px;
  font-weight: 600;
  @media(max-width: 1000px){
    text-align: center;
  }
`;
const ContentTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 15px 7px 15px;
  font-weight: 600;
  font-size: 18px;
`;
const DetailTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 15px;
  font-weight: 300;
  font-size: 16px;
`;

const Card: React.FC<ICard> = ({children, ...props}) => {
  const { title, total, handleSale, totalizers } = props
  return (
    <Container>
      <Label> { title } </Label>

      <Divider />
      <Content>
        { children }
      </Content>

      <Divider />
      <ContentTotal>
        <span>
          Total
        </span>
        <span>
          { formatCurrency(total) }
        </span>
      </ContentTotal>
      <DetailTotal>
        <span>
          Valor original do pedido
        </span>
        <span>
          { totalizers[0] && 
            formatCurrency(totalizers[0].value) }
        </span>
      </DetailTotal>
      <DetailTotal>
        <span>
          Descontos
        </span>
        <span>
          { totalizers[1] && 
            formatCurrency(totalizers[1].value) }
        </span>
      </DetailTotal>
      { total > 10 &&
        <FreeShipping>
          Parabéns, sua compra tem frete grátis !
        </FreeShipping>
      }

      <Divider style={{marginTop: "10px"}} />
      <ContentButton>
        <Button text="Finalizar compra"
          padding="15px"
          bgColor="#3d88eb"
          width="100%"
          radius="10px"
          color="#FFF"
          onClick={handleSale}
        />
      </ContentButton>
    </Container>
  )
};
export default Card;