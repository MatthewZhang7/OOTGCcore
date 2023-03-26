import React, { useState } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import { COLORS } from '../colors';
import Button2 from './Button2';
type SliderProps = {
    values:Array<number>;
}
const SliderDiv = styled.div<{increaseWidth:Boolean}>`
cursor:pointer;
transition-property: width;
  transition-duration: 0.1s;
  transition-timing-function: linear;
border-radius:15px 0px 0px 15px;
position:fixed;
right:0;
top:10%;
display:flex;
align-items:center;
justify-content:flex-start;
height: 400px;
width: ${props => props.increaseWidth ? "300px" : "80px"};
background-color:${COLORS.secondaryBlue};
`
const SliderTextDiv = styled.div`
transform: rotate(90deg);
display:flex;
align-items:center;
justify-content:center;
position: absolute;
right: -125px;
`
const SliderText = styled.p`
margin-left:50px;
width:max-content;
font-size:30px;
`
const ResultsDiv = styled.div`
display:flex;
flex-direction:column;
`
const Result = styled.div<{highest:boolean}>`
padding:10px 30px;
background-color:${props => props.highest ? COLORS.primaryBlue : COLORS.black};
margin:10px;
border-radius: 50px;
font-size: 25px;
color:white;
`
export const Slider = ({ values }: SliderProps) => {
    const [selected, setSelected] = useState<Boolean>(false);
    function handleClick() {
        setSelected(!selected)
      }
    function renderBoxes(values: number[]): React.ReactNode {
        const highest = Math.max(...values);
        return (
            <ResultsDiv>
                {values.map((value)=>{
                    return(
                        <Result highest={value===highest} >
                            {value}%
                        </Result>
                    )
                })}
            </ResultsDiv>
        )
    }

    return (
        <SliderDiv onClick={handleClick} increaseWidth={selected}>
            {selected?(renderBoxes(values)):null}
            <SliderTextDiv>
                <Button2 buttonImageStyle={selected?{transform:'rotate(270deg)'}:{transform:'rotate(90deg)'}} imagePath='https://cdn-icons-png.flaticon.com/512/3031/3031716.png'/>
                <SliderText>
                    Current Results
                </SliderText>
            </SliderTextDiv>
        </SliderDiv>
    )
    
}

