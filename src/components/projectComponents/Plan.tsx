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
        Plans
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
Zones
</div>
<Table  aria-label="custom pagination table">
        <TableBody>
          
          {rows?.map((row) => (
            <TableRow  className={classes.tr} key={row.id}>
              <a  style={{textDecoration : "none" }}>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.zoneName}
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
       <InputLabel htmlFor="outlined-adornment-amount">Nom DE LA ZONE</InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"

         startAdornment={<InputAdornment position="start"></InputAdornment>}
         label="meeting Objectif"
         size = "medium"
       />
     </FormControl>
   </Grid>

     <Grid sx={{mt:4 , mb:4}} spacing={2} container sm={12} md={12} xs={12} justify="flex-end">



     <Table   aria-label="custom pagination table">
        <TableBody className="table" >
        <TableRow   >
              
              <TableCell   scope="row">
              <h5>Plans</h5>
              </TableCell>
              <TableCell sx={{textAlign: "right"}}   scope="row">
              <AddCircleIcon className='add-icon' fontSize='large'/>
              </TableCell>
            

            
    
              </TableRow >
      
        <TableRow  sx={{bgcolor: "rgb(219, 210, 210)" }} >
              
              <TableCell   scope="row">
              Nom du fichier
              </TableCell>

              <TableCell   scope="row">
              Version
              </TableCell>
    
              </TableRow >

              <TableRow  >
              
              <TableCell sx={{textAlign:"center" , borderBottom : "1px solid black"}} colSpan={2}  scope="row">
              Cette zone n'a aucun plan , cliquez sur le bouton + pour importer un pan dans cette zone
              </TableCell>
              
              </TableRow>
        
           
         
        </TableBody></Table> 


        <Table   aria-label="custom pagination table">
        <TableBody className="table" >
        <TableRow   >
              
              <TableCell   scope="row">
              <h5>Documents</h5>
              </TableCell>
              <TableCell sx={{textAlign: "right"}}   scope="row">
            
              </TableCell>
              <TableCell sx={{textAlign: "right"}}   scope="row">
            
            </TableCell>
            <TableCell sx={{textAlign: "right"}}   scope="row">
            <AddCircleIcon className='add-icon' fontSize='large'/>
            </TableCell>

            
    
              </TableRow >
      
        <TableRow  sx={{bgcolor: "rgb(219, 210, 210)" }} >
              
              <TableCell   scope="row">
              Nom du fichier
              </TableCell>

              <TableCell   scope="row">
              Taille
              </TableCell>
              <TableCell   scope="row">
              téléchargé
              </TableCell>
              <TableCell   scope="row">
              synchronizer
              </TableCell>

              </TableRow >

              <TableRow  >
              
              <TableCell sx={{textAlign:"center" , borderBottom : "1px solid black"}} colSpan={4}  scope="row">
              Cliquez sur le bouton + pour importer un document.
              </TableCell>
              
              </TableRow>
        
           
         
        </TableBody></Table> 

     </Grid>
     </Box>
 
   </Grid>

</Box>
</Paper>
</Grid>
 


 </Grid>
   

  );

}

