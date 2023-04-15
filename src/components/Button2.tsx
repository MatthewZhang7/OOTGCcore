import React, { ReactText } from "react";
import "../assets/arrow.png"
import { COLORS } from '../colors';

interface Props {
  imagePath?: string;
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  width?: string;
  buttonImageStyle?:React.CSSProperties;
}

const Button2: React.FC<Props> = ({ 
    imagePath,
    border = "none",
    color = COLORS.primaryBlue,
    children,
    height = "50px",
    onClick, 
    radius = "50%",
    width = "50px",
    buttonImageStyle,
  }) => { 
  return (
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
    <img height="30px" width="30px" src={imagePath} style={buttonImageStyle} />
    {children}
    </button>
  );
}

export default Button2;