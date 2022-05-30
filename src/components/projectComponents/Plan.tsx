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
import { useSelector } from 'react-redux';
import  { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import Menu from "@material-ui/core/Menu";
import { DateTimePicker, KeyboardDateTimePicker , MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'
import "./Meetings.css";

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import moment from 'moment';
import axios from 'axios';

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

const [projectid , setProjectId] = useState(useSelector((state) => state.projectReducer.fullProject.selectedProject.id));

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

      
      console.log(projectid)
      setSelectedMeeting(temp)

      
  } , [])

  const select = useSelector
  let accessToken = select((state : any )=> state.userReducer.user.accessToken)
   
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  useEffect(()=>{

    axios.post(`http://127.0.0.1:8000/api/v1/zones`, {
      'projectId' : projectid ,
     
    
    }).then ( result => {
      
      setRows(result.data.data)

      console.log(rows)

                  
    }
    ).catch(error => {
      console.log(error)
    } )
 
  } , [])

  /// add zone

  const handleAddZone = () => {
    setAnchorEl(null);
    axios.post(`http://127.0.0.1:8000/api/v1/zone`, {
      'projectId' : projectid ,
      'zoneName' : "Nouvelle Zone"
    
    }).then ( result => {
      
      console.log(result)

      

                  
    }
    ).catch(error => {
      console.log(error)
    } )

    axios.post(`http://127.0.0.1:8000/api/v1/zones`, {
      'projectId' : projectid ,
     
    
    }).then ( result => {
      
      setRows(result.data.data)

      console.log(rows)

                  
    }
    ).catch(error => {
      console.log(error)
    } )
  }

  /// SELECTED ZONE

  const [selectedZone , setSelectedZone] = useState({
    id : 99999 ,
    zoneName : "",
    addresse : null ,
    description : null ,
    created_at : null ,
    updated_at : null , 
    projectId : null
  })

  const selectZone = (id) => {

    let temp =  rows.find((element) => {
      return element.id === id;
    })

    if (id == 99999){

      temp = {
        id : 99999,
        zoneName : "Non Classifiée"
      }
    }

   

    setSelectedZone(temp)

    axios.post(`http://127.0.0.1:8000/api/v1/plans`, {
      'id' : id 
     
    
    }).then ( result => {

      console.log(result)
      setPlans(result.data.data)
      

                  
    }
    ).catch(error => {
      console.log(error)
    } )


    axios.post(`http://127.0.0.1:8000/api/v1/zoneDocuments`, {
      'id' : id 
     
    
    }).then ( result => {

      console.log(result)

      setDocuments(result.data.data)

                  
    }
    ).catch(error => {
      console.log(error)
    } )
    

 


  } 
  //// UPDATE ZONE NAME

  const updateName = (event , id) => {

    setSelectedZone({...selectedZone , zoneName : event.target.value })
 
    rows.map(obj => {

      if (obj.id == id){

        return {...obj , zoneName : event.target.value}
      }

      return obj;
    })

    console.log(selectedZone)
   

    
  }

  const updateZone = () => {

  
    axios.post(`http://127.0.0.1:8000/api/v1/updateZone`, {
      'id' : selectedZone?.id ,
      'zoneName' : selectedZone?.zoneName
     
    
    }).then ( result => {
      
    


                  
    }
    ).catch(error => {
      console.log(error)
    } )

    axios.post(`http://127.0.0.1:8000/api/v1/zones`, {
      'projectId' : projectid ,
     
    
    }).then ( result => {
      
      setRows(result.data.data)

      console.log(rows)

                  
    }
    ).catch(error => {
      console.log(error)
    } )

    
  }

  /// upload documents and plans

  const { Upload } = require("upload-js")
const upload = new Upload({apiKey: "public_kW15arb4FUZhopvZDDgVuCd3efCY"})
   const uploadPlan = () =>  upload.createFileInputHandler({



    
    onUploaded: ({ fileUrl, fileId }) => {
    
      
      console.log(fileId)
      axios.post(`http://127.0.0.1:8000/api/v1/plan`, {
      'name' : fileId ,
      'type' : 0 ,
      'zone' : selectedZone?.id ,
      'project_id' : projectid
    
    }).then ( result => {

      console.log(result)

      

                  
    }
    ).catch(error => {
      console.log(error)
    } )

    console.log(fileId)
      axios.post(`http://127.0.0.1:8000/api/v1/plans`, {
      'id' : selectedZone?.id 
     
    
    }).then ( result => {

      console.log(result)
      setPlans(result.data.data)
      

                  
    }
    ).catch(error => {
      console.log(error)
    } )
     
    
    }
   });

   const uploadDocument = () =>  upload.createFileInputHandler({



    
    onUploaded: ({ fileUrl, fileId }) => {
    
      
      console.log(fileId)
      axios.post(`http://127.0.0.1:8000/api/v1/plan`, {
      'name' : fileId ,
      'type' : 1 ,
      'zone' : selectedZone?.id ,
      'project_id' : projectid
    
    }).then ( result => {

      console.log(result)

      

                  
    }
    ).catch(error => {
      console.log(error)
    } )

    console.log(fileId)
      axios.post(`http://127.0.0.1:8000/api/v1/zoneDocuments`, {
      'id' : selectedZone?.id 
     
    
    }).then ( result => {

      console.log(result)

      setDocuments(result.data.data)

      console.log( documents)

                  
    }
    ).catch(error => {
      console.log(error)
    } )
     
    
    }
   });

 /// downlaod document or plan
   var FileSaver = require('file-saver');
const downloadFile = (id ) => {

  var FileSaver = require('file-saver');
  

  const temp = plans.find((element) => {
    return element.id === id;
  })

  let url = upload.url(temp.name);

  FileSaver.saveAs(url, temp.name+".pdf");
  console.log("here")
}

const downloadDocument = (id ) => {

  var FileSaver = require('file-saver');
  

  const temp = documents.find((element) => {
    return element.id === id;
  })

  let url = upload.url(temp.name);

  FileSaver.saveAs(url, temp.name+".pdf");
  console.log("here")
}



   /// documents and plans state

   const [documents , setDocuments] = useState([]);
   const [plans , setPlans] = useState([])


   useEffect(()=>{

    axios.post(`http://127.0.0.1:8000/api/v1/plans`, {
      'id' : selectedZone?.id 
     
    
    }).then ( result => {

      console.log(result)
      setPlans(result.data.data)
      

                  
    }
    ).catch(error => {
      console.log(error)
    } )


    axios.post(`http://127.0.0.1:8000/api/v1/zoneDocuments`, {
      'id' : selectedZone?.id 
     
    
    }).then ( result => {

      console.log(result)

      setDocuments(result.data.data)

                  
    }
    ).catch(error => {
      console.log(error)
    } )
     

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
        <TableRow onClick={() => selectZone(99999)} className={classes.tr} key={99999}>
              <a  style={{textDecoration : "none" }}>
              <TableCell   scope="row">
                {"Non Classifiée"}
              </TableCell>
             
              </a>
            </TableRow>
          {rows?.map((row) => (
            <TableRow onClick={() => selectZone(row.id)} className={classes.tr} key={row.id}>
              <a  style={{textDecoration : "none" }}>
              <TableCell   scope="row">
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

<IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        aria-label="Open to show more"
        title="Open to show more"
        color='black'
      >

<AddCircleIcon className='add-icon' fontSize='medium'/>
        
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       
          <MenuItem onClick={handleAddZone} >
            Ajouter une zone
          </MenuItem>
          <MenuItem onClick={handleClose} >
            Ajouter un plan
          </MenuItem>
    
      </Menu>
</Grid>

   <Grid spacing={2} container sm={12} md={12} xs={12} >

   <FormControl fullWidth sx={{ mt: 5 }}>
       <InputLabel htmlFor="outlined-adornment-amount">Nom DE LA ZONE</InputLabel>
       <OutlinedInput onChange = {(event) => updateName(event , selectedZone?.id)}
         id="outlined-adornment-amount"
        value = {selectedZone?.id == 99999 ? "Non Classifiée" : selectedZone?.zoneName}
         startAdornment={<InputAdornment position="start"></InputAdornment>}
         label="meeting Objectif"
         size = "medium"
       />
     </FormControl>
   </Grid>

     <Grid sx={{mt:4 , mb:4}} spacing={2} container sm={12} md={12} xs={12} justify="flex-end">

            
     <Button
  variant="contained"
  component="label"
  sx={{backgroundColor : "#0e519e"}}
>
  Upload Plan
  <Input onChange={uploadPlan()}
    type="file"
    hidden
  ></Input>
</Button>


     <Table   aria-label="custom pagination table">
        <TableBody className="table" >
        <TableRow   >
              
              <TableCell   scope="row">
              <h5>Plans</h5>
              </TableCell>
              <TableCell sx={{textAlign: "right"}}   scope="row">

              </TableCell>
            
            
            
    
              </TableRow >
      
        <TableRow  sx={{bgcolor: "rgb(219, 210, 210)" }} >
              
              <TableCell   scope="row">
              Nom du fichier
              </TableCell>

              <TableCell   scope="row">
              download
              </TableCell>
    
              </TableRow >

              {plans?.map((row) => (
            <TableRow   key={row.id}>
              
              <TableCell   scope="row">
                {row.name}
              </TableCell>
              <TableCell   scope="row">
              <Button  sx={{backgroundColor : "#0e519e"}}
  variant="contained"
  component="label" onClick={(event) => downloadFile(row.id )}
>
  Download

  
  
</Button>
              </TableCell>
              
            </TableRow>
          ))}
         
        
           
         
        </TableBody></Table> 
        <Button
  variant="contained"
  component="label"
  sx={{backgroundColor : "#0e519e" , mt : 4}}
>
  Upload Document
  <Input onChange={uploadDocument()}
    type="file"
    hidden
  ></Input>
</Button>


<Table   aria-label="custom pagination table">
        <TableBody className="table" >
        <TableRow   >
              
              <TableCell   scope="row">
              <h5>Documents</h5>
              </TableCell>
              <TableCell sx={{textAlign: "right"}}   scope="row">

              </TableCell>
            
            
            
    
              </TableRow >
      
        <TableRow  sx={{bgcolor: "rgb(219, 210, 210)" }} >
              
              <TableCell   scope="row">
              Nom du fichier
              </TableCell>

              <TableCell   scope="row">
              download
              </TableCell>
    
              </TableRow >

              {documents?.map((row) => (
            <TableRow   key={row.id}>
              
              <TableCell   scope="row">
                {row.name}
              </TableCell>
              <TableCell   scope="row">
              <Button  sx={{backgroundColor : "#0e519e"}}
  variant="contained"
  component="label" onClick={(event) => downloadDocument(row.id )}
>
  Download

  
  
</Button>
              </TableCell>
              
            </TableRow>
          ))}
         
        
           
         
        </TableBody></Table> 

        <Grid item sm={12} md={12} xs={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center">
    <Paper elevation={2}>
     <Button onClick={updateZone} variant="contained" sx={{width : {

       md : 200 ,

     }}}>
       Enregistrer
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

