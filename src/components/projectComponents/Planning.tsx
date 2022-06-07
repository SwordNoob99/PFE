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
import { CircularProgress, Dialog, DialogContent, FormControl, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';

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
import axios from 'axios';
import { useSelector } from 'react-redux';
import { DatePicker } from '@material-ui/pickers';
import { fontWeight } from '@mui/system';
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
  const [rows , setRows] = useState([]);

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


  useEffect(() => {


    axios.post(`http://127.0.0.1:8000/api/v1/getPlannings`, {
      'project_id' : projectid ,
      'name' : "nouvelle planification"
    
    }).then ( result => {
      
      console.log(result)
      setRows(result.data.data)
      setLoading(false)
      

                  
    }
    ).catch(error => {
      console.log(error)
    } )
  } , [])

  
  const [projectid , setProjectId] = useState(useSelector((state) => state.projectReducer.fullProject.selectedProject.id));
 
  // add planning 

  const addPlanning = () => {

    setLoading(true)

    axios.post(`http://127.0.0.1:8000/api/v1/planning`, {
      'project_id' : projectid ,
      'name' : "Nouveau événement"
    
    }).then ( result => {
      
      console.log(result)

      

                  
    }
    ).catch(error => {
      console.log(error)
    } )

    axios.post(`http://127.0.0.1:8000/api/v1/getPlannings`, {
      'project_id' : projectid ,
      'name' : "new planning"
    
    }).then ( result => {
      
      console.log(result)
      setRows(result.data.data)

      setLoading(false)

                  
    }
    ).catch(error => {
      console.log(error)
    } )

  }

  // selected planning

  const [ selectedPlanning , setSelectedPlanning] = useState({
    id : "",
    name : "",
    description : "",
    category : "",
    concerne : "",
    
   
  })


  const handleSelectedPlanningChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {

      console.log(event.target.value)
      setSelectedPlanning({ ...selectedPlanning, [prop]: event.target.value });
      
    };

    const select = useSelector

   const [startDate , setStartDate] = useState("");
   const [endDate , setEndDate] = useState("");
   let accessToken = select((state : any )=> state.userReducer.user.accessToken)
   
   axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
   const save = () => {

    setLoading(true)
    axios.post(`http://127.0.0.1:8000/api/v1/updatePlanning`, {
      'project_id' : projectid ,
      'id' : selectedPlanning.id ,
      'description' : selectedPlanning.description ,
      'category' : selectedPlanning.category ,
      'concerne' : selectedPlanning.concerne ,
      'name' : selectedPlanning.name,
      'startDate' : startDate,
      'endDate' : endDate,
     
    
    }).then ( result => {
    
      console.log(result)

      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )

    axios.post(`http://127.0.0.1:8000/api/v1/getPlannings`, {
      'project_id' : projectid ,
      'name' : "nouvelle planification"
    
    }).then ( result => {
      
      console.log(result)
      setRows(result.data.data)

      setLoading(false)

                  
    }
    ).catch(error => {
      console.log(error)
    } )
   }


   // select planning

   const selectPlanning = (id) => {

    const temp = rows.find((element) => {
      return element.id === id;
    })

    setSelectedPlanning(temp)
    setStartDate(temp.startDate)
    setEndDate(temp.endDate)
    console.log(selectedPlanning)

   }

   // delete planning 

 const deletePlanning = () => {

  setLoading(true)

    axios.post(`http://127.0.0.1:8000/api/v1/deletePlanning`, {
      
      'id' : selectedPlanning.id
    
    }).then ( result => {
      
      console.log(result)
      setRows(result.data.data)
      setLoading(false)

                  
    }
    ).catch(error => {
      console.log(error)
    } )


  }

  // loading dialogue 
  const [loading , setLoading] = useState(true);

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

    <Dialog  PaperProps={{
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }} maxWidth="md" open={loading}>
   
        <DialogContent>
        {loading && <CircularProgress color="secondary" />} 
          
        </DialogContent>
      
      </Dialog>

   </Grid>


 <Grid container item md={2} >

   
<Paper sx={{width : {
  md :400,
  sm : 500
} , minHeight : 850
}} >

<div className="tableBanner">
Événement
</div>
<Table  aria-label="custom pagination table">
        <TableBody>
          
        
        {rows?.map((row) => (
            <TableRow onClick={() => selectPlanning(row.id)} className={classes.tr} key={row.id}>
              <a  style={{textDecoration : "none" }}>
              <TableCell   scope="row">

               <h6 style={{fontWeight : "bold"}}>{row.name}</h6>
                <p>
                {row.description} <br/>starDate : {row.startDate}
                </p>
                
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
Planning
</div>
<Paper elevation={2}>
<Box sx={{ width: '100%' }}>
<Grid item md={12} xs={12} sm={12}> 
   
   <Box  sx={{ width: '100%' , p:4  }}>

   <Grid spacing={2} container  direction="row"
  justifyContent="flex-end"
  alignItems="center" sm={12} md={12} xs={12} sx={{mb:4}} >

   <AddCircleIcon onClick={addPlanning} sx={{color : "#2074d4"}} className='add-icons' fontSize='large'/>
</Grid>
<Grid spacing={2} container sm={12} md={12} xs={12} >

<FormControl fullWidth sx={{ mt: 5 }}>
    <InputLabel htmlFor="outlined-adornment-amount">Nom</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
          value={selectedPlanning.name}
          onChange={handleSelectedPlanningChange("name")}
      startAdornment={<InputAdornment position="start"></InputAdornment>}
      label="réunion Objectif"
      size = "medium"
    />
  </FormControl>
</Grid>
   <Grid spacing={2} container sm={12} md={12} xs={12} >

   <FormControl fullWidth sx={{ mt: 5 }}>
       <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"
         value={selectedPlanning?.description}
         onChange={handleSelectedPlanningChange("description")}
         startAdornment={<InputAdornment position="start"></InputAdornment>}
         label="réunion Objectif"
         size = "medium"
       />
     </FormControl>
   </Grid>
   <Grid spacing={2} container sm={12} md={12} xs={12} >

<FormControl fullWidth sx={{ mt: 5 }}>
    <InputLabel htmlFor="outlined-adornment-amount">Catégorie</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      value={selectedPlanning?.category}
      onChange={handleSelectedPlanningChange("category")}
      startAdornment={<InputAdornment position="start"></InputAdornment>}
      label="réunion Objectif"
      size = "medium"
    />
  </FormControl>
</Grid>
<Grid spacing={2} container sm={12} md={12} xs={12} >

<FormControl fullWidth sx={{ mt: 5 }}>
<InputLabel id="demo-simple-select-label"> Concerne</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectedPlanning.concerne}
    onChange={handleSelectedPlanningChange("concerne")}
           
    label="phase de la visite"
   
  >
    <MenuItem value={1}>Tous corps d'état</MenuItem>

 

  </Select>
  </FormControl>
  <FormControl fullWidth sx={{ mt: 5 }}>
 
                           
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
       

                            <DatePicker
        views={["year", "month" , "day"]}
        label="Date debut"
       
        
        value={startDate}
        onChange={setStartDate}
      />

        </MuiPickersUtilsProvider>
        </FormControl>

        <FormControl fullWidth sx={{ mt: 5 }}>
 
                           
 <MuiPickersUtilsProvider utils={DateFnsUtils}>

 <DatePicker
        views={["year", "month" , "day"]}
        label="Date fin"
      
        
        value={endDate}
        onChange={setEndDate}
      />
</MuiPickersUtilsProvider>
</FormControl>
  <Grid sx={{mt:5}} item sm={12} md={12} xs={12}  container
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
<Grid  item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  
  >
    <Paper elevation={2}>
     <Button onClick={deletePlanning} variant="outlined" color="error"  sx={{width : {

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

