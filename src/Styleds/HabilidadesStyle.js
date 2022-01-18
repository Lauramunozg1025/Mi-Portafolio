import React from "react";
import styled from "styled-components";

export const StyledFielset = styled.fieldset `
   width : 830px ;
   height: 230px;
   border-color:  rgb(233, 2, 2);
   margin-left: 35px;
   margin-bottom: 10px;
   overflow: visible;
`;

export const DivSlide = styled.div `
    display: fixed;
`


const StyledH2 = styled.h2`
    font-size: 36px;
    font-weight: 300;
    letter-spacing: 10px;
    color: #448AFF;
    margin-top: auto;
    margin-bottom: 15px;
`;

export const StyledP = styled.p `
    font-weight: 100;
    font-size: 22px;
    color: rgb(48, 48, 48);;
    margin-top: 10px;
    margin-bottom: 0px;
`;



export const StyledSlide = styled.input `
  width: 200px;
  border-radius: 10px;
  opacity: 0.7;
  margin-right: 75px;

` 

export const H2Styled = ({ name }) => <StyledH2>{ name }</StyledH2>