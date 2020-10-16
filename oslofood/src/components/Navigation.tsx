import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import INavigationAttribute from '../models/INavigationAttribute'
import { Link } from 'react-router-dom'

const Navigation = ({dark} : INavigationAttribute) => {
    return (
        <Navbar variant={dark ? "dark" : "light"} bg={dark ? "dark" : "light"} >
            <Navbar.Brand className={"logo"} as={Link} to="/home">OsloFood</Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/restaurant">Restaurants</Nav.Link>
                    <Nav.Link as={Link} to="/bar">Bars</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

Navigation.defaultProps = {
    dark: false
}

export default Navigation
