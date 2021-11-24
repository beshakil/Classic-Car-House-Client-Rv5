import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddCars from '../AddCars/AddCars';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Reviews from '../Reviews/Reviews';
import AllOrders from '../AllOrders/AllOrders';
import MyAllReviews from '../MyAllReviews/MyAllReviews';
import ManageAllCars from '../ManageAllCars/ManageAllCars';
import Payment from '../Payment/Payment';

const drawerWidth = 260;

function Dashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <Typography variant="h4" style={{ fontFamily: 'Saira Condensed', padding: 10 }}>
                <Link to="/home" style={{ textDecoration: 'none', color: '#062046', marginLeft: 10 }}> Classic Car House </Link>
            </Typography>;
            <Divider />

            <Link to="/dashboard" style={{ textDecoration: 'none' }}><Button color="inherit" style={{ fontFamily: 'Saira Condensed', fontSize: 24, padding: 5, marginLeft: 10 }}>My Order</Button></Link> <br />
            <Link to={`${url}/createReviews`} style={{ textDecoration: 'none' }}><Button style={{ fontFamily: 'Saira Condensed', fontSize: 24, padding: 5, marginLeft: 10 }} color="inherit">Create  New Reviews</Button></Link>
            <Link to={`${url}/myAllReviews`} style={{ textDecoration: 'none' }}><Button style={{ fontFamily: 'Saira Condensed', fontSize: 24, padding: 5, marginLeft: 10 }} color="inherit">My All Reviews</Button></Link>
            <Link to={`${url}/payment`} style={{ textDecoration: 'none' }}><Button style={{ fontFamily: 'Saira Condensed', fontSize: 24, padding: 5, marginLeft: 10 }} color="inherit">Payment</Button></Link>
            <Divider />

            {admin && <Box>
                <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}><Button style={{ fontFamily: 'Saira Condensed', fontSize: 24, padding: 5, marginLeft: 10 }} color="inherit">Make Admin</Button></Link> <br />
                <Link to={`${url}/addCars`} style={{ textDecoration: 'none' }}><Button style={{ fontFamily: 'Saira Condensed', fontSize: 24, padding: 5, marginLeft: 10 }} color="inherit">Add New Cars</Button></Link> <br />
                <Link to={`${url}/manageAllCars`} style={{ textDecoration: 'none' }}><Button style={{ fontFamily: 'Saira Condensed', fontSize: 24, padding: 5, marginLeft: 10 }} color="inherit">Manage All Cars</Button></Link> <br />
                <Link to={`${url}/manageOrder`} style={{ textDecoration: 'none' }}><Button style={{ fontFamily: 'Saira Condensed', fontSize: 24, padding: 5, marginLeft: 10 }} color="inherit">Manage All Orders</Button></Link>
                <Divider />
            </Box>}
            <Link to={`${url}/myAllReviews`} style={{ textDecoration: 'none' }} onClick={logout}><Button color="inherit" style={{ fontFamily: 'Saira Condensed', fontSize: 24, padding: 5, marginLeft: 10 }}>Logout</Button></Link>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link to="/Home" style={{ textDecoration: 'none' }}><Button color="inherit" style={{ color: 'white', fontFamily: 'Saira Condensed', fontSize: 26, marginRight: 10, padding: 20 }}>Home</Button></Link>
                    <Link to="/allCars" style={{ textDecoration: 'none' }}><Button color="inherit" style={{ color: 'white', fontFamily: 'Saira Condensed', fontSize: 26, padding: 20 }}>All Super Cars</Button></Link>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myAllReviews`}>
                        <MyAllReviews></MyAllReviews>
                    </Route>
                    <Route path={`${path}/createReviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addCars`}>
                        <AddCars></AddCars>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllCars`}>
                        <ManageAllCars></ManageAllCars>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <AllOrders></AllOrders>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
