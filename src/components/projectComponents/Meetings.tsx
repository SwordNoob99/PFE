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
import { FormControl, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
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
import { DatePicker } from "@material-ui/pickers";
import { DateTimePicker, KeyboardDateTimePicker , MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'
import "./Meetings.css";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const useStyles = makeStyles(theme => ({

  tr: {
    color: "#17202A",
  
    textDecoration : "none" ,
    '&:hover': {
       background: "#212F3D",
       color: "white",
      cursor : "pointer"
    },
  },

  

}));


export default function Meetings(props) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const [isSomething , setIsSomething]   = useState(false) ;
  const [rows , setRows] = useState([]);

  const handleChange = () => {

    setIsSomething(!isSomething)
  }

  useEffect(()=>{

    const tempRows = [
      {
        "id" : 1,
        "meetingName" : "test1" ,
        "meetingDate" : "21/05/2022"
      },
      {
        "id" : 2,
        "meetingName" : "test2" ,
        "meetingDate" : "21/05/2022"
      },
      {
        "id" : 2,
        "meetingName" : "test2" ,
        "meetingDate" : "21/05/2022"
      },
      {
        "id" : 2,
        "meetingName" : "test2" ,
        "meetingDate" : "21/05/2022"
      },
      
    ]

    setRows(tempRows);

  } )

  return (

  
 <Grid container spacing={2} direction="row"
 justifyContent="space-between"
 alignItems="flex-start">

   <Grid item md={12}>
    <Box sx={{ width: '100%' , p:2 , padding : 2 }}>
    <Paper    elevation={7}>
    <Typography align='center' variant="h4" component="div" gutterBottom>
        Meetings
      </Typography>

      </Paper>
    </Box>

   </Grid>


 <Grid container item md={2} >

   
<Paper sx={{width : {
  md :400,
  sm : 500
} 
}} >

<div className="tableBanner">
Meeting Dates
</div>
<Table  aria-label="custom pagination table">
        <TableBody>
          {rows?.map((row) => (
            <TableRow className={classes.tr} key={row.id}>
              <a  style={{textDecoration : "none" }}>
              <TableCell   scope="row">
                {row.meetingDate}
              </TableCell>
             
              </a>
            </TableRow>
          ))}
         
        </TableBody></Table> 
</Paper>
</Grid>
   

<Grid  item md={10} container

    direction="column"
    display="flex"
    justifyContent="center">

<div className="tableBanner">
Meeting 
</div>
<Paper elevation={2}>
<Box sx={{ width: '100%' }}>
<Grid item md={12} xs={12} sm={12}> 
   
   <Box  sx={{ width: '100%' , p:4  }}>

     <Grid spacing={4} container sm={12} md={12} xs={12} justify="flex-end">

       <Grid item sm={12} md={12} xs={12} sx={{ m: 1 }}>
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
       

      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label="Meeting Date"
            color="primary"
        onError={console.log}
        disablePast
        format="yyyy/MM/dd HH:mm"
      />
       </MuiPickersUtilsProvider>
   </Grid>
   <Grid item sm={12} md={6} xs={12}>
   <FormControl fullWidth sx={{ m: 1 }}>
       <InputLabel htmlFor="outlined-adornment-amount">meeting Objectif</InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"
      
         startAdornment={<InputAdornment position="start"></InputAdornment>}
         label="meeting Objectif"
         size = "medium"
       />
     </FormControl>
     </Grid>

     <Grid item sm={12} md={6} xs={12}>
     <FormControl fullWidth sx={{ m: 1  }}>
       <InputLabel htmlFor="outlined-adornment-amount">Notes</InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"
            
         startAdornment={<InputAdornment position="start"></InputAdornment>}
         label="Notes"
         size = "medium"
         sx={{height : 100}}
       />
     </FormControl>
     </Grid>

     
     <Grid item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center">
     <Button>
       Zone de la visite
     </Button>
     </Grid>

     <Grid item sm={12} md={6} xs={12}>
     <FormControl fullWidth sx={{ m: 1  }}>
  <InputLabel id="demo-simple-select-label">Phase de la visite</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
  
    label="Phase de la visite"
    onChange={handleChange}
  >
    <MenuItem value={1}>Suivi de chantier</MenuItem>
    <MenuItem value={2}>Pré-cloisons</MenuItem>
    <MenuItem value={4}>Cloisons</MenuItem>
    <MenuItem value={5}>Pré-livrqison</MenuItem>
    <MenuItem value={3}>OPR</MenuItem>
    <MenuItem value={6}>Réception</MenuItem>
    <MenuItem value={7}>Livraison</MenuItem>
    <MenuItem value={8}>30 Jours</MenuItem>
    <MenuItem value={9}>GPA</MenuItem>
    <MenuItem value={10}>Biennale</MenuItem>
    <MenuItem value={11}>Décennale</MenuItem>

  </Select>
</FormControl>
     </Grid>

     <Grid item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center">
    <Paper elevation={2}>
     <Button sx={{width : {

       md : 1000 ,

     }}}>
       Observations
     </Button>
     </Paper>
     </Grid>

     <Grid item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center">
    <Paper elevation={2}>
     <Button sx={{width : {

       md : 1000 ,

     }}}>
       Remarques
     </Button>
     </Paper>
     </Grid>

     <Grid item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center">
    <Paper elevation={2}>
     <Button variant="outlined" color="error" sx={{width : {

       md : 1000 ,

     }}}>
       Supprimer la visite
     </Button>
     </Paper>
     </Grid>
     </Grid>
     </Box>
 
   </Grid>

</Box>
</Paper>
</Grid>
 


 </Grid>
   

  );

}

