import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class PositionedSnackbar extends React.Component {

  render() {
    return (
      <div>
        <Snackbar
          open={this.props.open}
          autoHideDuration={2000}
          onClose={this.props.handleToogle.bind(this)}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.message}</span>}
        />
      </div>
    );
  }
}

export default PositionedSnackbar;
