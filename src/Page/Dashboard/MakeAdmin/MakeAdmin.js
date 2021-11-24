import { Alert, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email }

        fetch('https://lit-tundra-83694.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }

            })
        e.preventDefault()
    }


    return (
        <Box>
            <Typography style={{ color: '#1F2F46', fontWeight: 500, textAlign: 'center', margin: '20px', fontFamily: 'Saira Condensed' }} variant="h3" component="div">
                Make <span className="span">Admin</span>
            </Typography> <br />
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '100%', m: 1, backgroundColor: 'white' }}
                    label="Email"
                    id="standard-basic"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                />

                <br />
                <Box className="btnHovers">
                    <button className="btn" type="submit" variant="contained" style={{ margin: 8, width: '100%', fontFamily: 'Saira Condensed', fontWeight: 500, fontSize: 24 }}>Make admin</button>
                </Box>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </Box>
    );
};

export default MakeAdmin;