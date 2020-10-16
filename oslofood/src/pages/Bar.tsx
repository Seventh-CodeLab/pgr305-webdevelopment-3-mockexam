import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import styled from 'styled-components';
import BarCard from '../components/BarCard';
import Navigation from '../components/Navigation';
import IBarItem from '../models/IBarItem';

const Bar = () => {

    const barURL = "https://localhost:5001/api/bar"
    const [barList, setBarList] = useState<IBarItem[]>([]);

    useEffect(() => {
        Axios.get(barURL)
            .then((result) => {
                setBarList(result.data)
            })
    }, [])

    return (
        <StyledDivContainer>
            <Navigation dark/>
            <StyledJumbotron>
                <h1 className={"logo"}>Bars in Oslo</h1>
            </StyledJumbotron>
            <Container>
                <Row>
                    {
                        barList.map(bar => <BarCard {...bar} key={bar.id}/>)
                    }
                </Row>
            </Container>
        </StyledDivContainer>
    )
}

const StyledDivContainer = styled("div")`
    background-color: #733434;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%23733434'/%3E%3Cstop offset='1' stop-color='%23522966'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%2372333b'/%3E%3Cstop offset='1' stop-color='%234f2868'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%23713241'/%3E%3Cstop offset='1' stop-color='%234c2669'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%23703148'/%3E%3Cstop offset='1' stop-color='%2349256b'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%236e304e'/%3E%3Cstop offset='1' stop-color='%2346246c'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%236d2f55'/%3E%3Cstop offset='1' stop-color='%2342226e'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%236c2e5b'/%3E%3Cstop offset='1' stop-color='%233e216f'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%236b2d61'/%3E%3Cstop offset='1' stop-color='%23392071'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%236a2c68'/%3E%3Cstop offset='1' stop-color='%23351e72'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%23632b68'/%3E%3Cstop offset='1' stop-color='%23301d74'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%235b2a67'/%3E%3Cstop offset='1' stop-color='%232b1b75'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%23522966'/%3E%3Cstop offset='1' stop-color='%23251a77'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill-opacity='0.74'%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    width: 100vw;
    height: 100%;
    min-height: 100vh;
`

const StyledJumbotron = styled(Jumbotron)`
    background: none;
    color: #ececec;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export default Bar
