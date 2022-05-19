import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Input, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { addProject } from "../features/projectSlice";
import { useSelector } from 'react-redux';
import  { useState, useEffect } from 'react';
import selectProjects from "../features/userProjectsSlice";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { add } from '../features/userProjectsSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import { selectFirstProject } from '../features/projectSlice';
import { Navigate } from "react-router";




export default function Meetings(props) {

  
  const rows = [
    {
      "meetingName" : "test1" ,
      "meetingDate" : "21/05/2022"
    },
    {
      "meetingName" : "test2" ,
      "meetingDate" : "21/05/2022"
    }
  ]

  const [isSomething , setIsSomething]   = useState(false) ;

  const handleChange = () => {

    setIsSomething(!isSomething)
  }

  return (

  
 <Grid container spacing={4}>

   <Grid item md={12}>
    <Box sx={{ width: '100%' , p:2 , padding : 2 }}>
    <Paper    elevation={7}>
    <Typography align='center' variant="h4" component="div" gutterBottom>
        Edit Project
      </Typography>

      </Paper>
    </Box>

   </Grid>
   <Grid container spacing={2} item md={12}>

 <Grid item md={3}>
<Paper>
  something
</Paper>
</Grid>
   

<Grid  item md={9} container

    direction="column"
    display="flex"
    justifyContent="center">
<Paper elevation={2}>
<Box sx={{ width: '100%' , p:2 , padding : 2 }}>

aomwthing
</Box>
</Paper>
</Grid>
   </Grid>


 </Grid>
   

  );

}

