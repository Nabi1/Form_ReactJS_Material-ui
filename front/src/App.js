import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import logo from './Homer.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

  class App extends Component {
  render() {
    return (
        <div className="App" style={{backgroundColor: '#fcb571'}}>
          <header className="App-header">
          <img src={logo} className="Homer" alt="Homer love React" />
          <h1 className="App-title">The Homer Odyssey</h1>
          </header>
          <p className="App-intro">
            Take some duff beer and donuts and follow me !
          </p>
            <Grid  container
              alignContent='stretch'
              alignItems='center'
              style={{ height:  '100%' }}>
                <Grid  item  xs={12} >
                    <Grid  container
                      alignContent='stretch'
                      alignItems='stretch'
                      justify='center'>
                        <Grid  item  xs={12} md={6}
                          style={{ 'textAlign':  'center'}}>
                          <Paper
                          elevation={4}
                          style={{ margin:  32, height:'100%', minWidth:'526px' }}
                          rounded ={'false'}>
                                    <SignUp style={{height:'100%'}} />
                          </Paper>
                        </Grid>
                        <Grid  item  xs={12}  md={6}
                          style={{ 'textAlign': 'center'}}>
                          <Paper
                          elevation={4}
                          style={{ margin:  32, height:'100%'}}
                          rounded ={'false'}
                          >
                                  <img src="./homer_simpson_doh.gif" alt="homer saying doh"  style={{height:'100%'}} />
                          </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
          <Footer />
        </div>
    );
  }
}

export default App;
