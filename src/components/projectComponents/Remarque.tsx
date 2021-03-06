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
import axios from 'axios';
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

export default function Remarques(props) {

  const [rows , setRows] = useState([


    {
      id : 2 ,
      status : "",
      localisation : "somewhere",
      description : "description",
      created : "2022/05/23" ,
      limite : "2022/08/05" ,
      lever : "2022/05/02",
      lot : "temp"
    },
    {
      id : 3 ,
      status : "",
      localisation : "somewhere",
      description : "description",
      created : "2022/05/23" ,
      limite : "2022/08/05" ,
      lever : "2022/05/02",
      lot : "temp"
    },
    {
      id : 4 ,
      status : "",
      localisation : "somewhere",
      description : "description",
      created : "2022/05/23" ,
      limite : "2022/08/05" ,
      lever : "2022/05/02",
      lot : "temp"
    },
    {
      id : 5 ,
      status : "",
      localisation : "somewhere",
      description : "description",
      created : "2022/05/23" ,
      limite : "2022/08/05" ,
      lever : "2022/05/02",
      lot : "temp"
    },
  ]);


  const classes = useStyles();
  const [selectedObs , setSelectedObs] = useState()

  const handleClickTable = (rowId) => {


    const temp = rows.find((element) => {
      return element.id === rowId;
    })

    setSelectedObs(temp)
    setOpenEdit(true)

  

}

  const [openEdit , setOpenEdit] = useState(false)

 
  

  return (

    
 <Paper levitation = { 2}>

<Dialog  PaperProps={{
    style: {
    
      boxShadow: 'none',
    },
  }} maxWidth="md" open={openEdit} >
   <DialogTitle>Modifier l'observation</DialogTitle>
        <DialogContent>
        
        <form >
                        <Grid container spacing={4}>

                        <Grid item xs={3}>
                                <TextField
                                    label="Localisation"
                                    type="test"
                                    required
                                    fullWidth
                                    name="name"
                                    value={selectedObs?.localisation}
                                 
                                />
                            </Grid>

                            <Grid item xs={9}>
                                <TextField
                                    label="description"
                                    type="text"
                                    required
                                    fullWidth
                                    name="description"
                                    value={selectedObs?.description}
                                />
                            </Grid>
                            <Grid item xs={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
       

       <KeyboardDateTimePicker
         variant="inline"
         ampm={false}
         label="date de creation"
             color="primary"
         onError={console.log}
         value={selectedObs?.created}
         format="yyyy/MM/dd"
         disabled
         
       />
        </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
       

       <KeyboardDateTimePicker
         variant="inline"
         ampm={false}
         label="date limite"
             color="primary"
         onError={console.log}
         value={selectedObs?.created}
         format="yyyy/MM/dd"
      
         
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
  <InputLabel id="demo-simple-select-label"> Status</InputLabel>
                            <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
           
    label="phase de la visite"
  
  >
    <MenuItem value={1}>Pos??</MenuItem>
    <MenuItem value={2}>Trait??e</MenuItem>
    <MenuItem value={4}>Refus??e</MenuItem>
    <MenuItem value={4}>Cloisons</MenuItem>
  

  </Select>
  </FormControl>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={() => setOpenEdit(false)} disableElevation>
                                    FERMER
                                </Button>
                                <Button
                                    style={{ marginLeft: '15px' }}
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    disableElevation
                                    onClick={() => setOpenEdit(false)}
                                >
                                    Enregistrer
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

<DeleteIcon className='add-icon'/>
<Typography fontSize={30} className="title">Remarques</Typography>
<AddCircleIcon className='add-icon' fontSize='large'/>


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
              Cr????
              </TableCell>
              <TableCell   scope="row">
              Date limite
              </TableCell>
              <TableCell   scope="row">
              Date lev??
              </TableCell>
              <TableCell   scope="row">
              Lot de travaux
              </TableCell>
             
        
            </TableRow>
          {rows?.map((row) => (
            <TableRow  className={classes.tr} key={row.id}>
              
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
              <Checkbox   size="small" />
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
              
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.localisation}
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.description}
              </TableCell>
              <TableCell onClick={() => handleClickTable(row.id)}  scope="row">
                {row.created}
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

