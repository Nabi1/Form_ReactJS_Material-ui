import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Selected.css';


class Navbar extends Component {
    render() {
        return (
            <div >
                <NavLink to="/"> Home </NavLink>
                <NavLink activeClassName="Selected" to="/History"> History </NavLink>
            </div>
        );
    }
}

export default Navbar;
