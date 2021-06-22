import styled from "styled-components";
import React from "react";
import { formatCurrency } from "../../utils";

export interface ISale {
	uniqueId: string;
	productId: string;
	name: string;
	price: number;
	sellingPrice: number;
	imageUrl: string;
};

interface IProductItem {
	sale: ISale
}
const Container = styled.div`
  display: flex;
	padding: 10px;
	width: 100%;
	align-items: center;
	@media(max-width: 1000px){
    flex-direction: column;
  }
`;
const ProductImage = styled.img`
	width: 170px;
	height: 170px;
	border: 2px solid #dddddd;
	margin-right: 20px;
	@media(max-width: 1000px) {
		margin-right: 0;
  }
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 600;
	@media(max-width: 1000px){
    align-items: center;
		> * {
			text-align: center;
		}
  }
`;
const ProductName = styled.label`
	font-size: 19px;
	margin-bottom: 10px;
	@media(max-width: 1000px){
		margin-bottom: 4px;
  }
`;
const ProductPrice = styled.label`
	font-size: 13px;
	color: #c9c9c9;
	
`;
const ProductSellingPrice = styled.label`
	font-size: 16px;
`;
const ProductItem: React.FC<IProductItem> = props => {
	const { sale } = props
	return (
		<Container>
      <ProductImage 
				src={sale.imageUrl}
				alt=""
			/>
			<Column>
				<ProductName>
					{ sale.name }
				</ProductName>
				<ProductPrice>
					{ formatCurrency(sale.price) }
				</ProductPrice>
				<ProductSellingPrice>
					{ formatCurrency(sale.sellingPrice) }
				</ProductSellingPrice>
			</Column>
		</Container>
	)
};
export default ProductItem;