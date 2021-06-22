import styled from "styled-components";
import React from "react";
import Card, { ITotalizer } from "../../components/cart/Card"
import sale from "../../database/cart1.json";
import { useState } from "react";
import { useEffect } from "react";
import ProductItem, { ISale } from "../../components/cart/ProductItem";

const Container = styled.div`
  display: flex;
	padding: 20px;
	justify-content: center;
	width: 100%;
	@media(max-width: 1000px){
    padding: 7px;
  }
`;
const Cart: React.FC = () => {
	const [items, setItems] = useState<Array<ISale>>([]);
	const [total, setTotal] = useState(0);
	const [totalizers, setTotalizers] = useState<Array<ITotalizer>>([]);
	
	useEffect(() => {
		setItems(sale.items);
		setTotal(sale.value);
		setTotalizers(sale.totalizers);
	}, []);

	const handleSale = () => {
		const payload = {items, total};
		console.log(payload);
  };

	return (
		<Container>
			<Card title="Meu carrinho"
				total={total}
				totalizers={totalizers}
				handleSale={handleSale}
			>
				{ items.map(el => 
					<ProductItem key={el.uniqueId}
						sale={el} 
					/>
				)}
			</Card>
		</Container>
	)
};
export default Cart;