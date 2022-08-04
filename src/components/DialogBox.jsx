import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Axios from 'axios';
import {useState} from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const [details , setDetails] = useState({});

  // get seller rate details
  const getRating = async () => {
      const response = await Axios.get(
          `http://localhost:3001/api/auth/rate/${props.reporteeId}`,
          null
      );
      setDetails(response.data);
  }

  const removeReport = async () => {
    const response = await Axios.post(
      `http://localhost:3001/api/reports/deletereport/${props.reportId}`,
      null
    );
    console.log(response);
    props.setReports(
      props.reports.filter(report => report._id !== props.reportId)
    );
    handleClose();
  }

  const handleClickOpen = () => {
    setOpen(true);
    getRating();
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Take A&nbsp; Action
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Report Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Rate : {details.rate}
          </Typography>
          <Typography gutterBottom>
            Number of Reports : {details.numberOfReports}
          </Typography>
          <Typography gutterBottom>
            Comments :  {details.rate && details.comments.map(comment => {
              return comment+" , ";
            })}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={removeReport}>
            Remove Report
          </Button>
          <Button autoFocus onClick={handleClose}>
            Suspend User
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
