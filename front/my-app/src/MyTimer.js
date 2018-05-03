import React, {Component} from 'react';

class MyTimer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            timer:"",
            count:10,
            speech:""
        }
    }

    componentDidMount() {
        this.compteur()
    }

    time() {
        let d = new Date();
        let h = d.getHours();
        if (h < 10) {
            h = `0${h}`
        }
        let m = d.getMinutes();
        if (m < 10) {
            m = `0${m}`
        }
        let s = d.getSeconds();
        if (s < 10) {
            s = `0${s}`
        }
        let date = `${h}:${m}:${s}`
        let speech = 'ah beh non en fait...'
        this.setState({timer:date})
        this.setState({count: (this.state.count - 1)})
        if (this.state.count <= 0) {
            this.setState({count:"0"})
            this.setState({speech:speech})
        }
    }

    compteur() {
        this.timer = setInterval(() => this.time(), 1000)
    }

    componentDidUpdate() {
        console.log("Le composant a été mis à jour")
    }

    render() {
        return (
            <div>
                <h1>{this.state.timer}</h1>
                <p>Paradoxe temporel aboutissant à la destruction totale de l'univers dans :</p>
                <p>{this.state.count} secondes</p>
                <p>{this.state.speech}</p>
            </div>
        )
    }
}

export default MyTimer;
