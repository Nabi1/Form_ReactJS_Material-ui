// React
import React, { Component } from 'react';
import {MuiThemeProvider, Paper ,Grid, createMuiTheme} from 'material-ui';
// Components
import SignUp from './Components/SignUp'
// CSS
import 'typeface-roboto'
import './App.css';
import logo from './logo.svg';

const theme = createMuiTheme();
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open:false
    }
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is L'Odyssée d'Homer</h1>
        </header>
        <h1>Welcome</h1>
        <MuiThemeProvider theme={theme}>
          <Paper elevation={12} style={{ margin:  32 }}>
            <Grid container spacing={24} align="center">
              <Grid  item  xs={12} sm={6} container alignItems='center' style={{ height:  '100%' }}>
                <Grid container alignContent='center'  >
                  <Grid style={{ 'textAlign':  'center' }} align="center">
                    <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt='Homer' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item  xs={12}  sm={6} >
                <SignUp />
              </Grid>
            </Grid>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

