import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DialogBox from './DialogBox';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <div style={{margin : 20}}>
        <Card sx={{ minWidth: 275 }}>     
        <CardContent>
          <Typography variant="h5" component="div" style={{marginBottom : 3}}>
            {props.title}
          </Typography>
          <Typography variant="body2" style={{margin : 3}}>
            Reporter : {props.reporterId.firstname}
          </Typography>
          <Typography variant="body2" style={{margin : 3}}>
            Reportee : {props.reporteeId.firstname}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{margin : 3}}>
            Description : {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <DialogBox 
          reporteeId={props.reporteeId._id} 
          reportId={props.reportId} 
          reports={props.reports}
          setReports={props.setReports}
          />
        </CardActions>
        </Card>
    </div>
  );
}
