import React from 'react'
import IBarItem from '../models/IBarItem'
import { Col, Card } from 'react-bootstrap'
import styled from 'styled-components'

const BarCard = ({id, name, averagePrice, imageURL} : IBarItem) => {

    const imageURLPrefix = "https://localhost:5001/"

    return (
        <Col key={id}>
            <StyledCard bg="dark" text="light">
                <Card.Img src={imageURLPrefix + imageURL} alt=""/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Average Price: {averagePrice},-</Card.Text>
                </Card.Body>
            </StyledCard>
        </Col>
    )
}

const StyledCard = styled(Card)`
    width: 15rem;
    height: 20rem;
    margin-bottom: 2rem;
    box-shadow: 3px 3px 5px rgba(0,0,0,.2);
`

export default BarCard
