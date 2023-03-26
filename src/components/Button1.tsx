import { kStringMaxLength } from "buffer";
import React, { ReactElement } from "react";
import { COLORS } from '../colors';
import styled from 'styled-components';

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
}

const Button1: React.FC<Props> = ({ 
    border = "none",
    color = COLORS.primaryBlue,
    children,
    height = "50px",
    onClick, 
    radius = "20px",
    width = "300px"
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    <ButtonText>{children}</ButtonText>
    </button>
  );
}

const ButtonText = styled.h1`
color:white;
font-size: 36px;
margin: auto;
:focus{
  outline:solid;
},
`

export default Button1;