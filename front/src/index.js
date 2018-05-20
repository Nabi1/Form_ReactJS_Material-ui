import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import blueGrey from 'material-ui/colors/blueGrey';

const theme = createMuiTheme({
    palette: {
      primary: blueGrey,
      root: {
        backgroundColor: '#fcb571'
      }
    }
  });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
        document.getElementById('root')
);
registerServiceWorker();
