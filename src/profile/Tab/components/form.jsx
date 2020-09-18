import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {
  const {name, setName} = props;
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState(name);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };


  function handleSubmit() {
    setName(username)
    handleClose();
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Profile
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
          <DialogTitle id="form-dialog-title">Change Name</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Enter New Name"
              type="text"
              value={username}
              fullWidth
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Ok
            </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}
