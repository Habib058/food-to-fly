import style from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components';

export const Nav = styled.nav`
background: lightgrey;
height:55px;
display:flex;
justify-content:space-between;
padding: 0.5rem;
z-index: 10;
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    color: gray;
}
&:hover{
    color: #0d6efd;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #fff;
@media screen and (max-width:768px){
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%,75%);
font-size: 1.5rem;
cursor: pointer;
}

`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
@media screen and (max-width:768px){
    display: none;
}
`;

export const NavBtn = styled.nav`

display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width:768px){
    display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #0d6efd;
padding: 5px 22px;
color: #fff;
border:none;
outline: none;
cursor: pointer;
transition: all .2s ease-in-out;
text-decoration: none;
&:hover{
    transition: all .2s ease-in-out;
    background: #fff;
    color: black;
}
`