import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const themeV1 = createMuiTheme({
 palette: {
    type: 'light',
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={themeV1}>
          <Grid  container
          alignItems='center'
          style={{ height:  '100%' }}>

              <Grid  item  xs={12}>
                  <Paper
                  elevation={4}
                  style={{ margin:  32 }}
                  >
                      <Grid  container
                      alignItems='center'
                      justify='center'
                      alignContent='center'>
                      <Grid  item  xs={12}  sm={6}
            style={{ 'textAlign':  'center' }}>
            <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="Homer" />
            </Grid>
                          <Grid  item  xs={12} sm={6}
                          style={{ padding:  32 }}
                          >
                              <SignUp  />
                          </Grid>
                      </Grid>
                  </Paper>
              </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
