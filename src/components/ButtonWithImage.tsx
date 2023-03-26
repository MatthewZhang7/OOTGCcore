import React, { useState } from 'react';
import {COLORS} from "../colors"
import styled from 'styled-components';

const ButtonDiv = styled.div`
    float:left;
`
const ButtonText = styled.h1`
color:white;
font-size: 10px;
margin: auto;
:focus{
  outline:solid;
},
`

interface Props {
    imagePath?: string;
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    onClick?: () => void;
    radius?: string;
    width?: string;
}

const ButtonWithImage: React.FC<Props> = ({
    imagePath,
    border = "none",
    color = COLORS.primaryBlue,
    children,
    height = "50px",
    onClick, 
    radius = "20px",
    width = "200px"

}) => {
return(
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         display: "flex",
         alignItems: "center",
         justifyContent: "center"
      }}
    >
    <ButtonDiv>
        <ButtonText>{children}</ButtonText>
        <img height="20px" width="20px" src={imagePath} />
    </ButtonDiv>
    
    </button>
);

}

export default ButtonWithImage;

