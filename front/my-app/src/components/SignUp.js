import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class SignUp extends Component {
    constructor(props){
		super(props);
		this.state ={
            email:"",
            password : "",
            name : "",
            lastname : "",
            flash : "",
            vertical: null,
            horizontal: null,
            open: false
        };
        this.handleChange= this.handleChange.bind(this);
    }
    
    handleChange(e){this.setState({[e.target.name]:e.target.value})};


    handleClick = state => () => {
        this.setState({ open: true, ...state });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

       
    handleSubmit(e){
        console.log(JSON.stringify(this.state,1,1));
        fetch("/auth/signup",
            {
                method:  'POST',
                headers:  new  Headers({'Content-Type':  'application/json'}),
                body:  JSON.stringify(this.state),
            })
        .then(res  =>  res.json())
        .then(
            res  =>  this.setState({"flash":  res.flash}),
            err  =>  this.setState({"flash":  err.flash})
        ) ;  e.preventDefault(); 
    }

    render(){
        const { vertical, horizontal, open } = this.state;
        return(
            <div>
                <h1>Sign Up !</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                   
                    <TextField
                        name="email"
                        label="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /><br/>
            
                    
                    <TextField
                        name="password"
                        label="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    /><br/>
                    
                    
                    <TextField
                        name="name"
                        label="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br/>
                    

                    <TextField
                        name="lastname"
                        label="lastname"
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    /><br/>

                    <Button type="submit"  onClick={this.handleClick({  vertical: 'bottom', horizontal: 'center' })} variant="raised" color="primary">
                        Submit
                    </Button>
                </form>

               <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{'aria-describedby': 'message-id',}}
                    message={<span id="message-id">{this.state.flash}</span>}
                />
            </div>
        );
    }
}
export default SignUp;

