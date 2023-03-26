import { kStringMaxLength } from "buffer";
import React, { ReactElement } from "react";
import { COLORS } from '../colors';
import styled from 'styled-components';

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  subText: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
}

const Button1SubText: React.FC<Props> = ({ 
    border = "none",
    color = COLORS.primaryBlue,
    children,
    subText,
    height = "100px",
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
    <SubText>{subText}</SubText>
    </button>
  );
}

const ButtonText = styled.h1`
color:white;
font-size: 30px;
margin: auto;
`
const SubText = styled.h1`
color:white;
font-size: 20px;
margin: auto;
`

export default Button1SubText;