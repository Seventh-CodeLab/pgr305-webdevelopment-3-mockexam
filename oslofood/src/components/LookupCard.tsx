import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import styled from 'styled-components'
import ILookup from '../models/ILookup'
import { Link } from 'react-router-dom'

const LookupCard = ({src, alt, title, pageReference} : ILookup) => {
    return (
        <StyledCol key={title}>        
            <StyledCard as={Link} to={`/${pageReference}`}>
                <Card.Img variant="top" src={src} alt={alt}/>
                <Card.Body style={{padding: 0}}>
                    <StyledButton>
                        {title}
                    </StyledButton>
                </Card.Body>
            </StyledCard>
        </StyledCol>
    )
}

const StyledButton = styled(Button)`
    border: none;
    padding: 1em 2em;
    width: 100%;
    height: 100%;
    margin: 0;
    background: none;
    transition: .2s ease;
    text-align: center;
    color: #343434;
    background-color: #ececec;
`

const StyledCard = styled(Card)`
    width: 20rem;
    box-shadow: 3px 3px 5px rgba(0,0,0,.2);
`


const StyledCol = styled(Col)`
    transition: .08s ease;
    &:hover{
        cursor: pointer;
        transform: scale(1.02);
    }
`

export default LookupCard
