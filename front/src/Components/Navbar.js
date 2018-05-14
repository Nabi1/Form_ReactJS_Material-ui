import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Selected.css';


class Navbar extends Component {
    render() {
        return (
            <div >
                <NavLink to="/"> Welcome </NavLink>
                <NavLink activeClassName="Selected" to="/History"> History </NavLink>
                <NavLink activeClassName="Selected" to="/Home"> Home </NavLink>
            </div>
        );
    }
}

export default Navbar;
