
import reactLogo from '../assets/CheckMark.png'
import React from "react";
import styled from "styled-components";
import { COLORS } from "../colors";
import { Header } from "../components/Header";
import logo from '../assets/BaseLogo2.png'
import convo from '../assets/convo.png'
import Button1 from "../components/Button1";
import Button2 from '../components/Button2';
import { Link } from "react-router-dom";


const Pagediv = styled.div`
background-color: ${COLORS.white};
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
height:100vh;
`
const Imagediv = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

const Textdiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:40px;
`
const Textdiv2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
`

const Buttonsdiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`



function EventCreatedPageName() {
    return (
  <Pagediv>
      <Imagediv>
      <img style={{marginBottom:'30px'}} src={reactLogo} alt="react logo" width={120} height={120}/>
      </Imagediv>

      <Textdiv>You're all set!</Textdiv>
      <Textdiv2>Share this link with your friends</Textdiv2>

          <Buttonsdiv>
            <Button1>Copy link address</Button1>
            <Button1 color={COLORS.grey} fontcolor={COLORS.black}>View Dashboard</Button1>
            </Buttonsdiv>
  

  </Pagediv>
    );
  }
  
  export default EventCreatedPageName;
