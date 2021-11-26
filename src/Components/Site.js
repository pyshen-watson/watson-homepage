import React from 'react'
import styled from 'styled-components'

export default function Site({icon, url, title}) {

    const StyledContainer = styled.div`
        width: 5vw;
        padding: 1vh 2vw;
        &:hover{
            background-color: #eee;
        }
    `

    const StyledLink = styled.a`
        text-decoration: none;
    `

    const StyledTitle = styled.div`
        margin-top: 0px;
        color: #bbbbbb;
        text-align: center;        
    `

    return (
        <StyledContainer>
            <StyledLink href={url}>
                <img 
                    src={icon} 
                    alt={title} 
                    title={url}
                    width="100%"
                />            
                <StyledTitle>
                    {title}
                </StyledTitle>
            </StyledLink>
        </StyledContainer>
    )
}
