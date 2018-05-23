import React, {Component} from 'react';
import Navbar from './Navbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            profile: {
                email: "homer.simpson@wildcodeschool.fr",
                name:  "Homer",
                lastname: "Simpson"
        }}}

    render() {
        const style = {
            backgroundColor: 'white',
            borderRadius: 0,
            padding: 5,
            marginTop: 10
        }
        return (
            <div>
                <Navbar />
                <p>YOUR PROFILE is here</p>
                <div>
                <List>
                <ListItem>
                    <ListItemText primary={this.state.profile.name} secondary="mon nom"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary={this.state.profile.email} secondary="mon email"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary={this.state.profile.lastname} secondary="mon lastname"/>
                </ListItem>
                </List>
                <Link style={style} to={`SignIn`} activeClassName="active">DECONNEXION</Link>
                </div>
            </div>
        );
    }
}

export default Profile;
