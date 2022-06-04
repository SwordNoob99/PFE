import * as React from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { parseISO } from 'date-fns';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Dialog, DialogContent, DialogTitle, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';

import ICalendarLink from "react-icalendar-link";
import { CircularProgress } from '@mui/material';
import  { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import { makeStyles } from "@material-ui/core/styles";

import { DatePicker, DateTimePicker, KeyboardDateTimePicker , MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'
import "./Meetings.css";
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import Menu from "@material-ui/core/Menu";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import moment from 'moment';
import axios from 'axios';
import { useSelector } from 'react-redux';


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

  useEffect(() => {

    axios.post(`http://127.0.0.1:8000/api/v1/getMeeting`, {
      'projectId' : projectid ,
      

     
    
    }).then ( result => {
     
      setRows(result.data.data)
      
      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )
  } , [])

  const handleSelectedMeetingChange =
  (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {

    console.log(event.target.value)
    setSelectedMeeting({ ...selectedMeeting, [prop]: event.target.value });
    
  };

  const select = useSelector
  const [projectid , setProjectId] = useState(useSelector((state) => state.projectReducer.fullProject.selectedProject.id));
  const accessToken = select((state : any )=> state.userReducer.user.accessToken)
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  const addMeeting = () => {

    

    let date = moment(new Date()).format("YYYY/MM/DD")


    axios.post(`http://127.0.0.1:8000/api/v1/meeting`, {
      'projectId' : projectid ,
      'date' : date ,

     
    
    }).then ( result => {
     
  
      
      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )


    axios.post(`http://127.0.0.1:8000/api/v1/getMeeting`, {
      'projectId' : projectid ,
      

     
    
    }).then ( result => {
     
      setRows(result.data.data)
      
      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )
    

  }
  const handleClickTable = (rowId) => {


    const temp = rows.find((element) => {
      return element.id === rowId;
    })

    setSelectedMeeting(temp)
    setDate(temp.date)

}

 

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

  const [isSomething , setIsSomething]   = useState(false) ;
  const [rows , setRows] = useState([]);

  const handleChange = () => {

    setIsSomething(!isSomething)
  }

  const [selectedMeeting , setSelectedMeeting] = useState({
    id : "",
    date : "",
    phase : "",
    object : "",
    note : ""
  });




  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const nativeOnChange = e => {
    const detail = {
      selectedIndex: e.target.selectedIndex
    };
    e.target.selectedIndex = 0;

    e.target.dispatchEvent(new CustomEvent("itemClick", { detail }));
  };

  // get qrcode for ics calendar

  const [qrCodeImage , setQrCodeImage] = useState();
  const [openQr , setOpenQr] = useState(false);

  const generate = () => {

    axios.post(`http://127.0.0.1:8000/api/v1/generateQrCode`, {
   
      'id' : selectedMeeting.id ,
    

     
    
    }).then ( result => {
     
  
   
      setQrCodeImage(result.data.qrcode)
      setOpenQr(true)

      setLoading(true)

      setTimeout(() => {

          setLoading(false)
      } , 1500)
      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )



  }

  // save meeting 

  const save = () => {
      
    axios.post(`http://127.0.0.1:8000/api/v1/updateMeeting`, {
      'projectId' : projectid ,
      'date' : date ,
      'id' : selectedMeeting.id ,
      'phase' : selectedMeeting.phase ,
      'object' : selectedMeeting.object ,
      'note' : selectedMeeting.note ,

     
    
    }).then ( result => {
     
  
      
      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )

    axios.post(`http://127.0.0.1:8000/api/v1/getMeeting`, {
      'projectId' : projectid ,
      

     
    
    }).then ( result => {
     
      setRows(result.data.data)
      
      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )

  }

  //delete meeting 
 const deleteMeeting = () => {

  
      
    axios.post(`http://127.0.0.1:8000/api/v1/deleteMeeting`, {
      'projectId' : projectid ,
      'date' : date ,
      'id' : selectedMeeting.id ,
      'phase' : selectedMeeting.phase ,
      'object' : selectedMeeting.object ,
      'note' : selectedMeeting.note ,

     
    
    }).then ( result => {
     
  
      
      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )

    axios.post(`http://127.0.0.1:8000/api/v1/getMeeting`, {
      'projectId' : projectid ,
      

     
    
    }).then ( result => {
     
      setRows(result.data.data)
      
      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )

  
 }


  // date

  const [date , setDate] = useState("")


 const closeQr = () => {

  setOpenQr(false)
 }

 const [loading , setLoading] = useState(false)

  return (

  
 <Grid container spacing={2} direction="row"
 justifyContent="space-between"
 alignItems="flex-start">

<Dialog  PaperProps={{
    style: {
      backgroundColor: loading ? 'transparent' : "" ,
      boxShadow: 'none',
    },
  }} maxWidth="md" open={openQr}>

<DialogTitle sx={{ m: 0, p: 0 }}>
 
    { !loading ? <IconButton onClick={closeQr}>
        
        <CloseIcon />

        </IconButton> : "" }
      
    
   
    </DialogTitle>
   
        <DialogContent>
        {loading && <CircularProgress color="secondary" />} 
        
        {!loading && <img src={qrCodeImage} height = "300px" />} 
     
          
        </DialogContent>
      
      </Dialog>

   <Grid item md={12}>
    <Box sx={{ width: '100%' , p:1  }}>
    <Paper    elevation={7}>
    <Typography align='center' variant="h4" component="div" gutterBottom>
    Réunions
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
Dates de réunion
</div>
<Table  aria-label="custom pagination table">
        <TableBody>
          {rows?.map((row) => (
            <TableRow  className={classes.tr} key={row.id}>
              <a  style={{textDecoration : "none" }}>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
               <h6> {row.date} </h6> <br/> {row.object}
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

     <Grid item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center">

            <a onClick={addMeeting}>
          <AddCircleIcon className='add-icon' fontSize='large'/>
          </a>
       
   </Grid>

       <Grid item sm={12} md={12} xs={12} sx={{ m: 1 }}>
      
       

       <MuiPickersUtilsProvider utils={DateFnsUtils}>

<DatePicker
       views={["year", "month" , "day"]}
       label="date"
     
       format={'yyyy/MM/dd'}
 
       value={date}
       onChange={setDate}
     />
</MuiPickersUtilsProvider>
   </Grid>
   <Grid item sm={12} md={6} xs={12}>
   <FormControl fullWidth sx={{ m: 1 }}>
       <InputLabel htmlFor="outlined-adornment-amount">Réunion Objectif</InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"
         value = {selectedMeeting?.object}
         onChange = {handleSelectedMeetingChange("object")}
         startAdornment={<InputAdornment position="start"></InputAdornment>}
         label="Réunion Objectif"
         size = "medium"
       />
     </FormControl>
     </Grid>

     <Grid item sm={12} md={6} xs={12}>
     <FormControl fullWidth sx={{ m: 1  }}>
       <InputLabel htmlFor="outlined-adornment-amount">Note</InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"
         value = {selectedMeeting?.note}
         onChange = {handleSelectedMeetingChange("note")}
         startAdornment={<InputAdornment position="start"></InputAdornment>}
         label="Note"
         size = "medium"
      
       />
     </FormControl>
     </Grid>

     
     <Grid item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center">
     <Button>
       Zone De La Visite
     </Button>
     </Grid>

     <Grid item sm={12} md={6} xs={12}>
     <FormControl fullWidth sx={{ m: 1  }}>
  <InputLabel id="demo-simple-select-label"> Phase De La Visite</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
            value = {selectedMeeting?.phase}
    label="phase de la visite"
    onChange = {handleSelectedMeetingChange("phase")}
  >
    <MenuItem value={1}>Suivi de chantier</MenuItem>
    <MenuItem value={2}>Pré-cloisons</MenuItem>
    <MenuItem value={4}>Cloisons</MenuItem>
    <MenuItem value={5}>Pré-livraison</MenuItem>
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
    <ICalendarLink event={event}>
     <Button sx={{width : {

md : 1000 ,

}}}>
      
    
      Ajouter au calendrier
     </Button>
     </ICalendarLink>
     </Paper>
     </Grid>

     <Grid item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  onClick = {generate}
  >
    <Paper elevation={2}>
     <Button sx={{width : {

       md : 1000 ,

     }}}>
       Generate calendar qr code
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
     <Button onClick={save} variant="contained" sx={{width : {

       md : 1000 ,

     }}}>
       Enregistrer
     </Button>
     </Paper>
     </Grid>
     <Grid item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center">
    <Paper elevation={2}>
     <Button onClick={deleteMeeting} variant="outlined" color="error" sx={{width : {

       md : 1000 ,

     }}}>
       Supprimer La Visite
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

