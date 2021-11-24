import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginCover from '../../../images/banner-car.png'
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import './Login.css'


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2} sx={{ mt: 0, paddingTop: 5, paddingBottom: 5 }}>

                        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <Typography style={{ color: '#1F2F46', fontWeight: 500, textAlign: 'center', margin: '10px', fontFamily: 'Saira Condensed' }} variant="h3" component="div">
                                    <span className=""> Please Login</span>
                                </Typography> <br />
                                <form onSubmit={handleLoginSubmit}>
                                    <TextField
                                        sx={{ width: '100%', m: 1, backgroundColor: 'white' }}
                                        label="Your Email"
                                        id="standard-basic"
                                        name="email"
                                        type="email"
                                        onChange={handleOnChange}
                                        variant="standard"
                                    />
                                    <TextField
                                        sx={{ width: '100%', m: 1, backgroundColor: 'white' }}
                                        id="standard-basic"
                                        label="Your Password"
                                        type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        variant="standard"
                                        autoComplete="current-password"
                                    /> <br />
                                    <br />

                                    <Button type="submit" variant="contained" style={{ margin: 8, width: '100%', backgroundColor: '#F92D3C', fontFamily: 'Saira Condensed', fontSize: 24 }}>Sign in</Button> <br />

                                    <NavLink to="/register" style={{}}><Button style={{ color: '#1F2F46', fontWeight: 500, textAlign: 'center', fontFamily: 'Saira Condensed', fontSize: 24 }} variant="text">New User? Please Click For Register</Button></NavLink>

                                    {isLoading && <CircularProgress />}
                                    {user?.email && <Alert severity="success">Successfully Login!</Alert>}
                                    {authError && <Alert severity="error">{authError}</Alert>}

                                </form>

                                <Typography style={{ color: '#1F2F46', fontWeight: 500, textAlign: 'center', margin: '10px', fontFamily: 'Saira Condensed' }} variant="h4" component="div">
                                    <span className=""> -------- Sign In With Google ---------</span>
                                </Typography>

                                <Button onClick={handleGoogleSignIn} variant="contained" style={{ margin: 8, width: '100%', backgroundColor: '#062046', fontSize: 24, fontFamily: 'Saira Condensed' }}>Google Sign In</Button>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Typography style={{ color: '#062046', fontWeight: 600, textAlign: 'center', margin: '10px', fontFamily: 'Saira Condensed' }} variant="h2" component="div">
                                Welcome To Our <br />
                                <span className="span pe-5 ps-5"> Classic Car House </span>
                            </Typography> <br />

                            <img
                                style={{ width: '99%', paddingTop: 30 }}
                                src={loginCover} alt="" />
                        </Grid>

                    </Grid>

                </Container >
            </Box>
            <Footer></Footer>
        </>
    );
};
export default Login;