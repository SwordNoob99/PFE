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
import { FormControl, Input, InputLabel, Typography } from '@mui/material';
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

import axios  from "./AxiosInstance";
import { add } from '../features/userProjectsSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import { selectFirstProject } from '../features/projectSlice';
import { Navigate } from "react-router";
import "./Observations.css";
import Checkbox from '@mui/material/Checkbox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker } from "@material-ui/pickers";
import { DateTimePicker, KeyboardDateTimePicker , MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';





const useStyles = makeStyles(theme => ({

  tr: {
    color: "#17202A",
  
    textDecoration : "none" ,
    '&:hover': {
       
       color: "white",
      cursor : "pointer"
    },
  },

  

}));

export default function Observations(props) {

  const [rows , setRows] = useState([


   
  ]);


  const classes = useStyles();


const select = useSelector
const [projectid , setProjectId] = useState(useSelector((state) => state.projectReducer.fullProject.selectedProject.id));
const accessToken = select((state : any )=> state.userReducer.user.accessToken)
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

  const [openEdit , setOpenEdit] = useState(false)

  // add 
  const add = () => {

     
     axios.post(`/observation`, {
      'projectId' : projectid ,
    

     
    
    }).then ( result => {
     
  
      
      
     
                  
    }
    ).catch(error => {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
        return Promise.reject(error.response);
    } )

    axios.post(`/getObservations`, {
      'projectId' : projectid ,
      headers: {"Access-Control-Allow-Origin": "*"}

     
    
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


    setOpenEdit(true)
    setDate(temp.limite)
    setSelectedObservation(temp)


}

const [selectedObservation , setSelectedObservation] = useState({

  id : "",
  localisation : "",
  description : "",
  created : "",
  limite : "",
  lever : "",
  lot : "",
  status : ""
})

const handleSelectedObservationChange =
(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {

  console.log(event.target.value)
  setSelectedObservation({ ...selectedObservation, [prop]: event.target.value });
  
};


const [aLots , setALots] =  useState([])

useEffect(() => {


  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

  
  axios.post(`/getObservations`, {
    'projectId' : projectid ,
    

   
  
  }).then ( result => {
   
    setRows(result.data.data)
    
    
   
                
  }
  ).catch(error => {
    console.log(error)
  } )


  axios.post(`http://127.0.0.1:8000/api/v1/getLots`, {
      'project_id' : projectid ,

    
    }).then ( result => {

      

      setALots(result.data.data)
  
      
  
                  
    }
    ).catch(error => {
      console.log(error)
    } )

  

} , [])

 const save = () => {



axios.put(`/test`, {
    'projectId' : projectid ,
    'id' : selectedObservation.id ,
    'localisation' : selectedObservation.localisation ,
    'description' : selectedObservation.description ,
    'created' : selectedObservation.created ,
    'limite' : date ,
    'lever' : selectedObservation.lever ,
    'lot' : selectedObservation.lot ,
    'status' : selectedObservation.status ,
    

   
  
  }).then ( result => {
     
                  
  }
  ).catch(error => {
    console.log(error)
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
      return Promise.reject(error.response);
  } )



}



function  promise   ()  {

  
    
        
          
  // SEND REQUEST TO ADD PROJECT
  axios.put(`/test`, {
    'projectId' : projectid ,
    'id' : selectedObservation.id ,
    'localisation' : selectedObservation.localisation ,
    'description' : selectedObservation.description ,
    'created' : selectedObservation.created ,
    'limite' : date ,
    'lever' : selectedObservation.lever ,
    'lot' : selectedObservation.lot ,
    'status' : selectedObservation.status ,
    
  
   
  
  })

    
  axios.post(`/getObservations`, {
    'projectId' : projectid ,
    

   
  
  }).then ( result => {
   
    setRows(result.data.data)
    
    
   
                
  }
  ).catch(error => {
    console.log(error)
  } )
}


 
const [date , setDate] = useState("")
  
const ClickTable = (rowId) => {

  const temp = rows.find((element) => {
    return element.id === rowId;
  })



  setDate(temp.limite)
  setSelectedObservation(temp)

  

}

const deleteObservation = () => {

  axios.post(`/deleteObservation`, {
    'projectId' : projectid ,
    'id' : selectedObservation.id

   
  
  }).then ( result => {
  
    
    
   
                
  }
  ).catch(error => {
    console.log(error)
  } )


  axios.post(`/getObservations`, {
    'projectId' : projectid ,
    

   
  
  }).then ( result => {
   
    setRows(result.data.data)
    
    
   
                
  }
  ).catch(error => {
    console.log(error)
  } )


}

  return (

    
 <Paper levitation = { 2}>

<Dialog  PaperProps={{
    style: {
    
      boxShadow: 'none',
    },
  }} maxWidth="md" open={openEdit} >
   <DialogTitle>Modifier l'observation</DialogTitle>
        <DialogContent>
        
        <form onSubmit={(e) => e.preventDefault()} >
                        <Grid container spacing={4}>
                       

                        <Grid  item xs={3}>
                                <TextField
                                    label="Localisation"
                                    type="test"
                                    required
                                    fullWidth
                                    name="localisation"
                                    value={selectedObservation?.localisation}
                                    onChange = {handleSelectedObservationChange("localisation")}
                                 
                                />
                            </Grid>

                            <Grid item xs={9}>
                                <TextField
                                    label="Description"
                                    type="text"
                                    required
                                    fullWidth
                                    name="description"
                                    value={selectedObservation?.description}
                                    onChange = {handleSelectedObservationChange("description")}
                                />
                            </Grid>
                            <Grid item xs={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
       

       <KeyboardDateTimePicker
         variant="inline"
         ampm={false}
         label="Date De Creation"
             color="primary"
         onError={console.log}
         value={selectedObservation?.created}
         onChange = {handleSelectedObservationChange("created")}
         format="yyyy/MM/dd"
         disabled
         
       />
        </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={6}>
                           
       

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
                            <Grid item xs={12}>
                               <Grid   container
  direction="column"
  justifyContent="space-around"
  alignItems="center" >

<Button variant="outlined"  sx={{width : {

md : 800 ,

} , height : 100}}>
                                <AddAPhotoIcon className = "photo" />
                               
                                
                                </Button>
                                </Grid>
                               
                            </Grid>
                            <Grid item xs={12}>
                            <FormControl fullWidth sx={{ m: 1  }}>
  <InputLabel id="demo-simple-select-label"> lot des travaux</InputLabel>
                            <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
           value = {selectedObservation.status}
           onChange = {handleSelectedObservationChange("status")}
    label="phase de la visite"
  
  >

  

  </Select>
  </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                            <FormControl fullWidth sx={{ m: 1  }}>
  <InputLabel id="demo-simple-select-label"> Status</InputLabel>
                            <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
           value = {selectedObservation.status}
           onChange = {handleSelectedObservationChange("status")}
    label="phase de la visite"
  
  >
    <MenuItem value={1}>Posé</MenuItem>
    <MenuItem value={2}>Traitée</MenuItem>
    <MenuItem value={4}>Refusée</MenuItem>

  

  </Select>
  </FormControl>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={() => setOpenEdit(false)} disableElevation>
                                    Fermer
                                </Button>
                                <Button
                                    style={{ marginLeft: '15px' }}
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    disableElevation
                                    onClick={ () => promise()}
                                >
                                    enregistrer
                                </Button>

                                <Button
                                    style={{ marginLeft: '15px' }}
                                    variant="outlined"
                                    color="error"
                                    type='submit'
                                    disableElevation
                                    onClick={() => setOpenEdit(false)}
                                >
                                    Supprimer
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
          
        </DialogContent>
      
      </Dialog>


   <Grid container>
   <Grid item md={12}  container
  direction="row"
  justifyContent="space-between"
  alignItems="center">

<DeleteIcon onClick = {deleteObservation} className='add-icon'/>
<Typography fontSize={30} className="title">Observations</Typography>
<AddCircleIcon onClick={add} className='add-icon' fontSize='large'/>


   </Grid>
     <Grid item md={12}>
   <Table  aria-label="custom pagination table">
        <TableBody>

        <TableRow >
              
              <TableCell   scope="row">
              <Checkbox   size="small" />
              </TableCell>

              <TableCell   scope="row">
              #
              </TableCell>
              <TableCell   scope="row">
              Localisation
              </TableCell>
              <TableCell   scope="row">
              Description
              </TableCell>

              <TableCell   scope="row">
              Créé
              </TableCell>
              <TableCell   scope="row">
              Date limite
              </TableCell>
              <TableCell   scope="row">
              Date levé
              </TableCell>
              <TableCell   scope="row">
              Lot de travaux
              </TableCell>
             
      












      


            </TableRow>
          {rows?.map((row) => (
            <TableRow  className={classes.tr} key={row.id}>
              
              <TableCell onClick={() => ClickTable(row.id)}  scope="row">
              <Checkbox   size="small" />
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
              {row.status == 1 ? <div className="ball b1"></div> : ""} {row.status == 2 ? <div className="ball b3"></div> : ""} {row.status == 3 || row.status == 4 ? <div className="ball b2"></div> : ""} 
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.localisation}
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.description}
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.created_at}
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.limite}
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.lever}
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.lot}
              </TableCell>
              
            </TableRow>
          ))}
         
        </TableBody></Table> 
        </Grid>
   </Grid>
  
 </Paper>

   

  );

}

