import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {

  render() {
    return (
      <div>
        <Dialog
          open={this.props.showDialogueBox}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.hideDialogueBox}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {'Eh coucou toi'}
          </DialogTitle>
          <DialogContent>
          {
            this.props.messageDialogue.map((message,i) => {
              return (
                <DialogContentText key={i} id="alert-dialog-slide-description">
                  {message}
                </DialogContentText> 
              ) 
            })          
          }
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.hideDialogueBox} color="primary">
              All right, fine
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;