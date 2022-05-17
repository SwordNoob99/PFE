import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import CustomPaginationActionsTable from './TableProjects';
import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from '@material-ui/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function GetProjectInfo() {


  const dispatch = useDispatch();
  const [project , setProject] = useState<any[]>([]);

  let temp  = useSelector((state : any)  => state.projectReducer.fullProject.selectedProject) ;
  let isProjectSelected  = useSelector((state : any)  => state.projectReducer.fullProject.projectSelected) 

  

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (

    <>

    
    
    
  <Paper elevation={3} >
  <Grid container >
  <Box sx={{ width: '100%' , p:2 }}>
  <Paper elevation={2} >
{/** EDIT PROJECT */}
  <Typography variant="h4" component="div" gutterBottom>
        Edit Project
      </Typography>
      <Grid  container sm={12} md={12} xs={12} justify="flex-end" >
      
      <Grid item md={6} xs={12} sm={6}> 
   
      <Box  sx={{ width: '100%' , p:2 }}>

        <Grid spacing={4} container sm={12} md={12} xs={12} justify="flex-end">

          <Grid item sm={4} md={4} xs={12}>
      <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
      />
      </Grid>
      <Grid item sm={4} md={4} xs={12}>
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
        </Grid>

        <Grid item sm={12} md={12} xs={12}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        </Grid>
        </Grid>
        </Box>
    
      </Grid>
      <Grid container item  md={6} xs={12} sm={6}>

   

      <Grid item md={6} xs={12}>
        <Input type='file'></Input>
      <Box
        component="img"
        sx={{
          m : 2,
          maxHeight: { xs: 250, md: 250 },
          maxWidth: { xs: 400, md: 300 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />

</Grid>
        
      </Grid>
    
   
        
      </Grid>

      
    
      </Paper>

      <Paper elevation={2} >

 {/** EDIT COLLABORATORS */}
 <Typography variant="h4" component="div" gutterBottom>
       Edit Collaborators
     </Typography>
     <Grid  container sm={12} md={12} xs={12} justify="flex-end" >
     
     <Grid item md={6} xs={12} sm={6}> 
  
     <Box  sx={{ width: '100%' , p:2 }}>

       <Grid spacing={4} container sm={12} md={12} xs={12} justify="flex-end">

         <Grid item sm={4} md={4} xs={12}>
     <TextField
         id="standard-helperText"
         label="Helper text"
         defaultValue="Default Value"
         helperText="Some important text"
         variant="standard"
     />
     </Grid>
     <Grid item sm={4} md={4} xs={12}>
       <TextField
         id="standard-helperText"
         label="Helper text"
         defaultValue="Default Value"
         helperText="Some important text"
         variant="standard"
       />
       </Grid>

       <Grid item sm={12} md={12} xs={12}>
       <FormControl fullWidth sx={{ m: 1 }}>
         <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
         <OutlinedInput
           id="outlined-adornment-amount"
           value={values.amount}
           onChange={handleChange('amount')}
           startAdornment={<InputAdornment position="start">$</InputAdornment>}
           label="Amount"
         />
       </FormControl>
       </Grid>
       </Grid>
       </Box>
   
     </Grid>
     <Grid container item  md={6} xs={12} sm={6}>

  

     <Grid item md={6} xs={12}>
       <Input type='file'></Input>
     <Box
       component="img"
       sx={{
         m : 2,
         maxHeight: { xs: 250, md: 250 },
         maxWidth: { xs: 400, md: 300 },
       }}
       alt="The house from the offer."
       src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
     />

</Grid>
       
     </Grid>
   
  
       
     </Grid>

     
   
     </Paper>

     <Paper elevation={2} >
        {/** EDIT DOCUMENTS */}
 
 <Typography variant="h4" component="div" gutterBottom>
       Edit Documents
     </Typography>
     <Grid  container sm={12} md={12} xs={12} justify="flex-end" >
     
     <Grid item md={6} xs={12} sm={6}> 
  
     <Box  sx={{ width: '100%' , p:2 }}>

       <Grid spacing={4} container sm={12} md={12} xs={12} justify="flex-end">

         <Grid item sm={4} md={4} xs={12}>
     <TextField
         id="standard-helperText"
         label="Helper text"
         defaultValue="Default Value"
         helperText="Some important text"
         variant="standard"
     />
     </Grid>
     <Grid item sm={4} md={4} xs={12}>
       <TextField
         id="standard-helperText"
         label="Helper text"
         defaultValue="Default Value"
         helperText="Some important text"
         variant="standard"
       />
       </Grid>

       <Grid item sm={12} md={12} xs={12}>
       <FormControl fullWidth sx={{ m: 1 }}>
         <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
         <OutlinedInput
           id="outlined-adornment-amount"
           value={values.amount}
           onChange={handleChange('amount')}
           startAdornment={<InputAdornment position="start">$</InputAdornment>}
           label="Amount"
         />
       </FormControl>
       </Grid>
       </Grid>
       </Box>
   
     </Grid>
     <Grid container item  md={6} xs={12} sm={6}>

  

     <Grid item md={6} xs={12}>
       <Input type='file'></Input>
     <Box
       component="img"
       sx={{
         m : 2,
         maxHeight: { xs: 250, md: 250 },
         maxWidth: { xs: 400, md: 300 },
       }}
       alt="The house from the offer."
       src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
     />

</Grid>
       
     </Grid>
   
  
       
     </Grid>

 
    
     </Paper>
 

      
    </Box>
    </Grid>
    </Paper  >

   

  </>
  )
}
