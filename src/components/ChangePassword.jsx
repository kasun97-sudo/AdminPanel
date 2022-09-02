import * as React from 'react';
import {useState , useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import {useParams} from 'react-router-dom';

const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate();
  const [password , setPassword] = useState("");
  const [conPassword , setConPassword] = useState("");

  const {id , token} = useParams();

  const block = {
    "id" : id,
    "token" : token,
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password == conPassword){
      console.log(block);
      const response = await Axios.post(
        "http://localhost:3001/api/auth/changepassword",
        {
          "id" : id,
          "token" : token,
          "password" : password
        }
      )
      if(response.data.status == 'okay'){
        navigate('/successchange');
      }
    } else {
      console.log("Passwords are not matched");
    }
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              onChange = {(e) => setPassword(e.target.value)}
              value = {password}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              onChange={(e) => setConPassword(e.target.value)}
              value={conPassword}
              margin="normal"
              required
              fullWidth
              name="conPassword"
              label="Confirm Password"
              type="password"
              id="conPassword"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}