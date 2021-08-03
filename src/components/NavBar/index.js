import React from 'react';
import { Link } from 'react-router-dom';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavBarElements';
import logo from '../../images/food-travel-rgb-color-icon-vector-36647023.jpg'
import { useContext } from 'react';
import { userContext } from '../../App';



const NavBar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h4>Food To Fly</h4>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/home" activeStyle>Home</NavLink>
                <NavLink to="/orders" activeStyle>Orders</NavLink>
                <NavLink to="/admin" activeStyle>Admin</NavLink>
                <NavLink to="/deals" activeStyle>Deals</NavLink>
            </NavMenu>
            {
                loggedInUser.email?<Link style={{textDecoration:'none',color:'black'}}>{loggedInUser.name}</Link>:<NavBtn>
                <NavBtnLink to ="login">LogIn</NavBtnLink>
            </NavBtn>
            }
            
        </Nav>
        </>
    );
};

export default NavBar;