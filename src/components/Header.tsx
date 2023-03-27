import styled from 'styled-components';
import { COLORS } from '../colors';
import React from "react";

const NavDiv = styled.div`
background-color: #0F84FD;
cursor: pointer;
width: auto;
height: 90px;
`

export const Header = () => {
    return (
        <NavDiv >

<image
      style={{
         display: "flex",
         justifyContent: "left",
         margin: 10,

      }}
    >
    <img src="../assets/HeaderLogo.png" width={90} height={90} />

    </image>
            
        </NavDiv>
    )
    
}