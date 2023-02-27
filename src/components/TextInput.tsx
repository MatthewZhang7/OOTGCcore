import React, { useState } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import { COLORS } from '../colors';
type TextInputProps = {
  placeholder: string,
}

type inputType = string | number | readonly string[] | undefined

const CustomInput = styled.input`
  border:0px;
  border-bottom: 3px solid #000000;
  width: 100%;
  font-size: 48px;
  color: ${COLORS.secondaryBlue};
  font-style: italic;
  font-weight: 300;
:focus{
  outline:none;
},
::placeholder{
  color: ${COLORS.secondaryBlue};
  font-weight:300;
},
`
const InputDiv = styled.div`
 width:100%
`
export const TextInput = ({ placeholder }: TextInputProps) => {
    const [text, setText] = useState<inputType>("");
    function handleChange(input:inputType) {
        setText(input)
    }

    return (
        <InputDiv>
          <CustomInput
          placeholder={placeholder}
          type="text" 
          value={text}
          onChange={(e) => handleChange(e.target.value)}
        />
        </InputDiv>
    )
}

