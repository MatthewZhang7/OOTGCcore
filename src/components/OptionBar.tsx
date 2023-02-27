import React, { useState } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import { COLORS } from '../colors';
type OptionBarProps = {
  text: string,
}
const OptionDiv = styled.div<{selected:Boolean}>`
background-color: #0F84FD;
border-radius: 30px;
padding:0px 24px;
cursor: pointer;
background: ${props => props.selected ? COLORS.primaryBlue : COLORS.black};
`

const OptionText = styled.h1`
  color:white;
  text-align: left;
  font-weight: 400;
  font-size: 36;
`
export const OptionBar = ({ text }: OptionBarProps) => {
    const [selected, setSelected] = useState<Boolean>(false);
    function handleClick() {
        setSelected(!selected)
      }
    return (
        <OptionDiv selected={selected} onClick={handleClick} >
            <OptionText>{text}</OptionText>
        </OptionDiv>
    )
    
}

