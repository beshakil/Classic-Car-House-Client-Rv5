import * as React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css'


export default function ButtonAppBar() {
    const element = <FontAwesomeIcon icon={faCar} />
    const { user, logout } = useAuth();
    return (
        <Navbar bg="light" expand="lg">
            <Link to="/home" className="ms-3 p-3" style={{ fontSize: 36, fontWeight: 600, textDecoration: 'none', color: '#062046' }}>{element} <span className="ms-1" style={{ color: '#062046' }}>Classic Car House</span> </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to="/allReviews" style={{ textDecoration: 'none' }} className="me-3 btnHover"><button className="btn" style={{ fontSize: 24 }}>Client FeedBack</button></Link>

                    <Link to="/allCars" style={{ textDecoration: 'none' }} className="me-3 btnHover"><button className="btn" style={{ fontSize: 24 }}>All Super Cars</button></Link>

                    <div>
                        {
                            user?.email ?
                                <div>
                                    <Link to="/dashboard" style={{ textDecoration: 'none' }} className="me-3 btnHover"><button className="btn" style={{ fontSize: 24 }}>Dashboard</button></Link>

                                    <button className="btn btn-danger me-3" onClick={logout} style={{ textDecoration: 'none', fontFamily: 'Saira Condensed', fontSize: 24 }} color="inherit">LOGOUT</button>
                                </div>
                                :
                                <Link to="/login" style={{ textDecoration: 'none' }} className="me-3 btnHover"><button className="btn" style={{ fontSize: 24 }}>LOGIN</button></Link>
                        }
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}