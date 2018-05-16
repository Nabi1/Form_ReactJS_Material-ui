import React, {Component} from 'react';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>Bienvenue dans la Caravane, 
                    <br/>fais comme chez les Gitsy: t'es pas chez toi ici !!</p>
            </div>
        );
    }
}

export default Home;
