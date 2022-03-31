import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import React , { Component}  from 'react';
import         { render   }  from 'react-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const ImgContainer = styled.div`
  height: 10%;
  flex: 1;
`;

const Image = styled.img`
  height: 7%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: ;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Products = () => {
  return (
    <Container>
      
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} >
          <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              
            </InfoContainer>
        </Product>

      ))}
    </Container>
  );
};

export default Products;