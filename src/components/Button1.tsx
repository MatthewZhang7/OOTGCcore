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
  fontcolor?: string;
}

const Button1: React.FC<Props> = ({ 
    border = "none",
    color = COLORS.primaryBlue,
    children,
    height = "50px",
    onClick, 
    radius = "20px",
    width = "300px",
    fontcolor = "white"
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
    <ButtonText fontcolor={fontcolor}>{children}</ButtonText>
    </button>
  );
}

const ButtonText = styled.h1<{fontcolor:string}>`
color:${props => props.fontcolor};
font-size: 18px;
margin: auto;
:focus{
  outline:solid;
},
`

export default Button1;