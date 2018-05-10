import React, {Component} from 'react';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>Bienvenue sur l'accueil</p>
            </div>
        );
    }
}

export default Home;
