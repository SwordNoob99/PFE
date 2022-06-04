import * as React from 'react';
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
import { useDispatch } from 'react-redux';
import { login , justLogged} from '../features/userSlice';
import axios from 'axios';
import { HistoryRouterProps } from 'react-router-dom';
import { changeState } from '../features/appBarSlice';
import { useSelector } from 'react-redux';
import { add } from '../features/userProjectsSlice';
import { Navigate } from "react-router";
import { useState } from 'react';
import logo from "../../assets/images/logo.png"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Architex
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

   

   


const theme = createTheme();

export default function Login(props) {
  

  const [result, setResult] = useState();
  let user_id = 0;
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    let user = null
    let token = null
    let accessToken = null
    let isLoggedIn = false
    let redirect = false;

    axios.post(`http://127.0.0.1:8000/api/v1/login` , {
      'email' : data.get('email') ,
      'password' : data.get('password')
    }).then(
        res => {
           
            user = res.data.user
            accessToken = res.data.acces_token
            isLoggedIn = true
            redirect = true
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            dispatch(login ({

              user ,
                    accessToken ,
                    isLoggedIn 
              }))

              dispatch(justLogged (true))

              dispatch(changeState (false))

              user_id = user.id ;
              token = accessToken
           
              axios.get(`http://127.0.0.1:8000/api/v1/projectUser/`+user_id ).then(
                  res => {
                     
                   
                     
                     let  projects = res.data.projects
                  
                      dispatch(add ({

                        projects
                        }))
                      setResult(true)

        
                  },
              ).catch(error => {
                console.log(error)
              } )
          
        },
    ).catch(error => {
      console.log(error)
    } )
    
   

    

    

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      {!!result && (
        <Navigate
          to={{ pathname: "/projects", state: { data: result } }}
        />
      )}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' , height : 70 , width : 70 }}>
          <img src={logo} height = "50px" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }
            }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}