import styled from "styled-components";

export const Progress = styled.svg`

    width: ${({ width }) => width ? width : '40px'};
    height: ${({ height }) => height ? height : '40px'};

    & .track{
        fill: #1C1C24;
    }

    & .progress{
        fill:none;
        stroke: #50D86A;
        stroke-width: 5;
        stroke-dasharray: 630;
        stroke-dashoffset: 500;
    }
    
`

export const BadgeSupport = styled.div`

    width:${({width})=>width?width:'42px'};
    height: ${({ height }) => height ? height : '42px'};
    background-color: #131419;
    border-radius: 100%;

    & .progress_wrapper{
        padding:${({width})=>width!='40px'?'0':'1px'}
    }

`