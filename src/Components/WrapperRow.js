import React from 'react'
import styled from 'styled-components'
import Site from './Site'

export default function WrapperRow({dataset}) {

    const StyledRow = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 2vh 0px;
    `

    const content = dataset.map( data => 
        <Site 
            icon={data.icon}
            url={data.url}
            title={data.title}
        /> )
    

    return (
        <StyledRow>
            {content}
        </StyledRow>
    )
}
