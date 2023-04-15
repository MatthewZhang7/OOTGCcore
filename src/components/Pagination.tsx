import styled from 'styled-components';
import { COLORS } from '../colors';

type PaginationProps ={
    pages: number,
    currentPage: number,
}

const Dot = styled.div<{selected:Boolean}>`
height: 10px;
width: 10px;
border-radius: 30px;
margin: 5px;
background: ${props => props.selected ? COLORS.black : COLORS.primaryBlue};
`
const PaginationDiv = styled.div`
    display: flex;
`

export const Pagination = ({pages, currentPage}: PaginationProps) => {
    const PaginationDots = [];
    for(let i = 0; i < pages; i++){
        PaginationDots.push(
            <Dot selected={currentPage - 1 < i} />
        )
    }
    return(
        <PaginationDiv>
            {PaginationDots.map((pd) => pd)}
        </PaginationDiv>
    )
}