import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Alert } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';

const AllOrders = ({ date }) => {
    //const { user, token } = useAuth();
    const { user } = useAuth();
    const [success, setSuccess] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(() =>
        fetch('https://lit-tundra-83694.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
        , [user])

    const handleDelete = id => {
        fetch(`https://lit-tundra-83694.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    setSuccess(true)
                    const remaining = orders.filter(row => row._id !== id);
                    setOrders(remaining);
                }

            })
    }

    return (
        <>

            <div className="container pt-5 pb-5">

                < div className="text-center" >
                    <h1 className='pb-4'>My Total Orders <span className="span"> {orders.length}</span></h1>
                </div >

                <div className="row">
                    {orders.map((row) => (
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div key={row._id} >
                                <div className="mb-5 shadow rounded-3 p-4">
                                    <h4>Car Name: {row.carName}</h4>
                                    <hr />
                                    <h3>Your Name: {row.name}</h3>
                                    <h4>Email: {row.email}</h4>
                                    <h4>Address: {row.address}</h4>
                                    <h4>Price: {row.city}</h4>
                                    <h4>Number: {row.number}</h4>
                                    <hr />
                                    <button className="btn btn-primary me-3">Pending</button>
                                    <button onClick={() => handleDelete(row._id)} className="btn btn-primary">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {success && <Alert severity="success">Order Cancel Successfully</Alert>}
            </div >
            <Footer></Footer>










            {/* <Box>
            <h2>Appointments: {orders.length}</h2>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Car Name</TableCell>
                                <TableCell align="left">Your Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Address</TableCell>
                                <TableCell align="left">Mobile Number</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="left">{row.carName}</TableCell>
                                    <TableCell component="th" scope="row" align="left">{row.name}</TableCell>
                                    <TableCell component="th" scope="row" align="left">{row.email}</TableCell>
                                    <TableCell component="th" scope="row" align="left">{row.address}</TableCell>
                                    <TableCell component="th" scope="row" align="left">{row.number}</TableCell>
                                    <TableCell component="th" scope="row" align="left">
                                        <button className="btn btn-primary me-3">Pending</button>
                                        <button onClick={() => handleDelete(row._id)} className="btn btn-primary">Cancel</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box> */}
        </>
    );
};

export default AllOrders;