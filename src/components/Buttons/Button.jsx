import React from "react"
import styled from "styled-components"

export const Button = styled.button`
    background: ${({ background }) => background ? '#2D2D3A' : 'none'};
    width:${({ width }) => width};
    height:${({ height }) => height};
    border: ${({ border }) => border ? '1px solid #4447E2' : 'none'};
    border-radius: 15px;
`