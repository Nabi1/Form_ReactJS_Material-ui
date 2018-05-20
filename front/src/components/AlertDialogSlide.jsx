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
          open={this.props.showAlert}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.hideAlert}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"What's wrong with your form, Dude?"}
          </DialogTitle>
          <DialogContent>
            {
              this.props.message.map(message => {
                return (
                  <DialogContentText id="alert-dialog-slide-description">
                    {message}
                  </DialogContentText> 
                ) 
              })          
            }
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.hideAlert} color="primary">
              I understand
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;