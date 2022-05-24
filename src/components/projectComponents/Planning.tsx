import * as React from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { FormControl, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';

import ICalendarLink from "react-icalendar-link";

import  { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import { makeStyles } from "@material-ui/core/styles";

import { DateTimePicker, KeyboardDateTimePicker , MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'
import "./Meetings.css";

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import moment from 'moment';

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


export default function Plan(props) {

  const addMeeting = () => {

    

    let date = moment(new Date()).format("YYYY/MM/DD")
    let meeting = {
      "id" : 9,
      "meetingName" : "test9" ,
      "meetingDate" : date ,
      "Obj" : "objectif 9" ,
      "note" : "note 9 ",
      "phase" : "phase 9"
    }

    const newRows = [...rows];
    newRows.push(meeting);
    setRows(newRows);
    setSelectedMeeting(meeting)
  }
  const handleClickTable = (rowId) => {


    const temp = rows.find((element) => {
      return element.id === rowId;
    })

    setSelectedMeeting(temp)

}

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const event = {
    title: "My Title",
    description: "My Description",
    startTime: "2018-10-07T10:30:00+10:00",
    endTime: "2018-10-07T12:00:00+10:00",
    location: "10 Carlotta St, Artarmon NSW 2064, Australia",
    attendees: [
      "Hello World <hello@world.com>",
      "Hey <hey@test.com>",
    ]
  }

  const classes = useStyles();
  const [qrCode , setQrCode] = useState((state : string) => "");
  const [isSomething , setIsSomething]   = useState(false) ;
  const [rows , setRows] = useState([

    {

      "id" : 1,
      "zoneName" : "Non classifiée"
    },
    {

      "id" : 2,
      "zoneName" : "Zone 1"
    },
    
  ]);

  const handleChange = () => {

    setIsSomething(!isSomething)
  }

  const [selectedMeeting , setSelectedMeeting] = useState();

  React.useLayoutEffect  (() => {
    let temp = []
      if (rows){
        temp = rows[0]
      }

      setSelectedMeeting(temp)

      
  } , [])

 

  return (

  
 <Grid container spacing={2} direction="row"
 justifyContent="space-between"
 alignItems="flex-start">

   <Grid item md={12}>
    <Box sx={{ width: '100%' , p:1  }}>
    <Paper    elevation={7}>
    <Typography align='center' variant="h4" component="div" gutterBottom>
        Planning
      </Typography>

      </Paper>
    </Box>

   </Grid>


 <Grid container item md={2} >

   
<Paper sx={{width : {
  md :400,
  sm : 500
} , minHeight : 850
}} >

<div className="tableBanner">
Evenement
</div>
<Table  aria-label="custom pagination table">
        <TableBody>
          
        <TableRow  className={classes.tr}>
              <a  style={{textDecoration : "none" }}>
              <TableCell   scope="row">
                <h5>1 Evenement sans titre</h5>
                <p>lin : 23/05/2022 <br/> Tous corps d'etat</p>
              </TableCell>
             
              </a>
            </TableRow>
            <TableRow  className={classes.tr}>
              <a  style={{textDecoration : "none" }}>
              <TableCell   scope="row">
                <h5>2 Evenement sans titre</h5>
                <p>lin : 19/05/2022 <br/> Tous corps d'etat</p>
              </TableCell>
             
              </a>
            </TableRow>
        </TableBody></Table> 
</Paper>
</Grid>
   

<Grid  item md={10} container

    direction="column"
    display="flex"
    justifyContent="center">

<div className="tableBanner">
Planes
</div>
<Paper elevation={2}>
<Box sx={{ width: '100%' }}>
<Grid item md={12} xs={12} sm={12}> 
   
   <Box  sx={{ width: '100%' , p:4  }}>

   <Grid spacing={2} container  direction="row"
  justifyContent="flex-end"
  alignItems="center" sm={12} md={12} xs={12} sx={{mb:4}} >

   <AddCircleIcon sx={{color : "#2074d4"}} className='add-icons' fontSize='large'/>
</Grid>
   
   <Grid spacing={2} container sm={12} md={12} xs={12} >

   <FormControl fullWidth sx={{ mt: 5 }}>
       <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"

         startAdornment={<InputAdornment position="start"></InputAdornment>}
         label="meeting Objectif"
         size = "medium"
       />
     </FormControl>
   </Grid>
   <Grid spacing={2} container sm={12} md={12} xs={12} >

<FormControl fullWidth sx={{ mt: 5 }}>
    <InputLabel htmlFor="outlined-adornment-amount">Catégorie</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"

      startAdornment={<InputAdornment position="start"></InputAdornment>}
      label="meeting Objectif"
      size = "medium"
    />
  </FormControl>
</Grid>
<Grid spacing={2} container sm={12} md={12} xs={12} >

<FormControl fullWidth sx={{ mt: 5 }}>
<InputLabel id="demo-simple-select-label"> concerne</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
            value = {selectedMeeting?.phase}
    label="phase de la visite"
    onChange={handleChange}
  >
    <MenuItem value={1}>Tous corps d'état</MenuItem>

 

  </Select>
  </FormControl>
  <FormControl fullWidth sx={{ mt: 5 }}>
 
                           
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
       

       <KeyboardDateTimePicker
         variant="inline"
         ampm={false}
         label="date de debut"
             color="primary"
         onError={console.log}
      
         format="yyyy/MM/dd"
      
         
       />
        </MuiPickersUtilsProvider>
        </FormControl>

        <FormControl fullWidth sx={{ mt: 5 }}>
 
                           
 <MuiPickersUtilsProvider utils={DateFnsUtils}>


<KeyboardDateTimePicker
variant="inline"
ampm={false}
label="date de fin"
color="primary"
onError={console.log}

format="yyyy/MM/dd"


/>
</MuiPickersUtilsProvider>
</FormControl>

<Grid sx={{mt:5}} item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center">
    <Paper elevation={2}>
     <Button variant="outlined" color="error" sx={{width : {

       md : 1000 ,

     }}}>
       Supprimer le planning
     </Button>
     </Paper></Grid>
</Grid>




     </Box>
 
   </Grid>

</Box>
</Paper>
</Grid>
 


 </Grid>
   

  );

}

