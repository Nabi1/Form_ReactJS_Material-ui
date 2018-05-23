import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Selected.css';

class Navbar extends Component {
    render() {
        return (
            <div >
                <NavLink 
                to="/"> Welcome </NavLink>
                <NavLink 
                to="/SignUp"> SignUp </NavLink>
                <NavLink 
                activeClassName="Selected" 
                to="/Profile"> Profile </NavLink>
                <NavLink 
                activeClassName="Selected" 
                to="/Home"> Caravane </NavLink>
                <NavLink 
                activeClassName="Selected" 
                to="/SignIn"> SignIn </NavLink>
            </div>
        );
    }
}

export default Navbar;
