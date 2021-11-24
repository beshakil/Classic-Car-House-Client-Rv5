import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginCover from '../../../images/banner-car.png'
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did Not Match')
            return
        }
        registerUser(loginData.email, loginData.password, history, loginData.name);
        e.preventDefault();
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
                                    <span className=""> Register User</span>
                                </Typography> <br />
                                {!isLoading && <form onSubmit={handleLoginSubmit}>
                                    <TextField
                                        sx={{ width: '70%', m: 1, backgroundColor: 'white' }}
                                        label="Your Name"
                                        id="standard-basic"
                                        name="name"
                                        type="text"
                                        onChange={handleOnBlur}
                                        variant="standard"
                                    />
                                    <TextField
                                        sx={{ width: '70%', m: 1, backgroundColor: 'white' }}
                                        label="Your Email"
                                        id="standard-basic"
                                        name="email"
                                        type="email"
                                        onChange={handleOnBlur}
                                        variant="standard"
                                    />
                                    <TextField
                                        sx={{ width: '70%', m: 1, backgroundColor: 'white' }}
                                        id="standard-basic"
                                        label="Your Password"
                                        type="password"
                                        name="password"
                                        onChange={handleOnBlur}
                                        variant="standard"
                                        autoComplete="current-password"
                                    />
                                    <TextField
                                        sx={{ width: '70%', m: 1, backgroundColor: 'white' }}
                                        id="standard-basic"
                                        label="Re-type Your Password"
                                        type="password"
                                        name="password2"
                                        onChange={handleOnBlur}
                                        variant="standard"
                                        autoComplete="current-password"
                                    />
                                    <br />
                                    <br />



                                    <Button type="submit" variant="contained" style={{ margin: 8, width: '70%', backgroundColor: '#F92D3C', fontFamily: 'Saira Condensed', fontSize: 24 }}>Register</Button>
                                    <br />

                                    <NavLink to="/login"><Button style={{ color: '#1F2F46', fontWeight: 500, textAlign: 'center', fontFamily: 'Saira Condensed', fontSize: 24 }} variant="text">Already Register? Please Login</Button></NavLink>


                                </form>}
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">Your Account is a Successfully Created!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}

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
export default Register;