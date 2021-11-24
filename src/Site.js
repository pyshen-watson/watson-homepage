import React from 'react'
import styled from 'styled-components'

export default function Site({icon, url, title}) {

    const SiteContainer = styled.div`
        width: 5vw;
    `
    const SiteTitle = styled.div`
        margin-top: 0px;
        color: #bbbbbb;
    `

    return (
        <SiteContainer>
            <a href={url}>
                <img 
                    src={icon} 
                    alt={title} 
                    title={url}
                    width="100%"
                    />            
            </a>
            <SiteTitle>{title}</SiteTitle>
        </SiteContainer>
    )
}
