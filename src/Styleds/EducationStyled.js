import React from "react";
import styled from "styled-components";

export const StyledFielset = styled.fieldset `
   width : 830px ;
   height: 210px;
   border-color:  rgb(255, 115, 0);;
   margin-left: 35px;
   margin-bottom: 10px;
`;

const StyledH2 = styled.h2`
    font-size: 36px;
    font-weight: 300;
    letter-spacing: 10px;
    color: #448AFF;
    margin-top: auto;
    margin-bottom: 15px;
`;

export const StyledH4 = styled.h4 `
    color: black;
    font-weight: 400;
    font-size: 24px;
    margin-top: 15px;
    margin-bottom: 2px;
`;

export const StyledP = styled.p `
    font-weight: 100;
    font-size: 19px;
    color: rgb(48, 48, 48);;
    margin-top: 10px;
    margin-bottom: 2px;
`;

export const H2Styled = ({ name }) => <StyledH2>{ name }</StyledH2>