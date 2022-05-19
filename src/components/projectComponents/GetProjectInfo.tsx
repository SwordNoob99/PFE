import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import CustomPaginationActionsTable from './TableProjects';
import { useState , useEffect } from 'react';
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
import { CircularProgress, Input, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { addProject } from '../features/projectSlice';
import { State } from '@mui/system/cssVars/useCurrentColorScheme';
import { makeStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';

export default function GetProjectInfo() {



  // UPDATE PROJECT INFO 

  const select = useSelector
  const dispatch = useDispatch;
  const accessToken = select((state : any )=> state.userReducer.user.accessToken)
  const project_id =  select((state : any )=> state.projectReducer.fullProject.selectedProject.id)
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  function  promise   ()  {

  
    
      
          
        // SEND REQUEST TO ADD PROJECT
        axios.post(`http://127.0.0.1:8000/api/v1/projectUpdate` , {
          'id' : project_id ,
          'projectName' : formValues.projectName ,
          'constructionType' : formValues.constructionType ,
          'addresse' : formValues.addresse ,
          'description' : formValues.description ,
          'image_url' : formValues.image_url
        }).then ( result => {

        
          let selectedProject = result.data.project;
         
       
          
   
                      
        }
        ).catch(error => {
          console.log(error)
        } )
      
      }

      const editProject = () => {
     
        promise()
        
       
        
      }


 
  const [project , setProject] = useState<any[]>([]);

  let temp  = useSelector((state : any)  => state.projectReducer.fullProject.selectedProject) ;
  let isProjectSelected  = useSelector((state : any)  => state.projectReducer.fullProject.projectSelected) 


  // GET SELECTED PROJECT FROM REDUX

  let selectedProject = useSelector((state : any) => state.projectReducer.fullProject.selectedProject)
  
  

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [projectName , setProjectName] = useState()
  const [formValues , setFormValues] = useState({
    projectName : selectedProject.projectName,
    description : '',
    constructionType : '',
    image_url : selectedProject.image_url ,
    addresse : selectedProject.addresse ,
    image : ''
  })


  useEffect(()=>{
    console.log(selectedProject)
    setFormValues({
      projectName : selectedProject.projectName ,
      description : selectedProject?.description ,
    constructionType : selectedProject?.constructionType ,
    image_url :selectedProject?.image_url ,
    addresse : selectedProject?.addresse
    })

    console.log(formValues)


  } , [selectedProject])

 

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }


  })
}


const handleFileRead = async (event) => {
  const file = event.target.files[0]
  setFormValues({ ...formValues ,
    image_url : event.target.value
  });
  const base64 = await convertBase64(file)
  setFormValues({ ...formValues ,
    image : base64
  })
console.log(base64)
}




const handleChangeImage = (evt) => {
  console.log("Uploading");
  var self = this;
  var reader = new FileReader();
  var file = evt.target.files[0];

  reader.onload = function(upload) {
      setFormValues({ ...formValues ,
        image_url : upload.target.value 
      });
  };
  reader.readAsDataURL(file);
  console.log(formValues.image_url);
  console.log("Uploaded");
}

/// HANDLE DOCUMENTS

const documentRows = [
  {
    id : 1 ,
    docmentName : "first Document" ,
    Type : "pdf" ,
    Description : "This is a pdf document"
  } ,
  {
    id : 2 ,
    docmentName : "second Document" ,
    Type : "word",
    Description : "This is a word document"
  } ,
  {
    id : 3,
    docmentName : "third Document" ,
    Type : "excel" ,
    Description : "This is an excel document"
  } ,
]

/// HANDLE COLLABORATORS ARRAY


const collaboratorsRows = [
  {
    id : 1 ,
    name : "Elyazami Oussama" ,
    role : "Maitre d'ouvrage" ,
    email : "oussama.elyazami55@gmail.com" ,
    society : "mts"
  } ,
  {
    id : 2 ,
    name : "first Document" ,
    role : "Maitre d'oeuvre" ,
    email : "khalidboutlih@gmail.com",
    society : "mts"
  } 

]

// DOCUMENT TABLE 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:nth-of-type(odd):hover' : {
    backgroundColor: red,
  }
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

/// ADD COLLABORATOR STATE MANAGEMENT

const [openCollaborator , setOpenCollaborator] = useState(false)

/// ADD lot de travaux STATE

const [openLot , setOpenLot] = useState(false)




  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({ ...formValues, [prop]: event.target.value });
      console.log(event.target.value)
    };

  return (

    <>

    
    
    
  <Paper elevation={3} sx={{
    width : {
      xs : 350 ,
      sm : 450 ,
      md : 800 ,
      lg : '100%'
    }
  }} >
  <Grid container >
  <Box sx={{ width: '100%' , m : 4 }}>
  <Paper elevation={2} >
{/** EDIT PROJECT */}
  <Typography variant="h4" component="div" gutterBottom>
        Edit Project
      </Typography>
      <Grid  container sm={12} md={12} xs={12} justify="flex-end" >
      
      <Grid item md={6} xs={12} sm={12}> 
   
      <Box  sx={{ width: '100%' , p:4 }}>

        <Grid spacing={4} container sm={12} md={12} xs={12} justify="flex-end">

          <Grid item sm={12} md={12} xs={12}>
          <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Project Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={formValues.projectName}
            onChange={handleChange('projectName')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="name"
            size = "medium"
          />
        </FormControl>
      </Grid>
      <Grid item sm={12} md={12} xs={12}>
      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Construction Type</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={formValues.constructionType}
            onChange={handleChange('constructionType')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="description"
            size = "medium"
          />
        </FormControl>
        </Grid>

        <Grid item sm={12} md={12} xs={12}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">description</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={formValues.description}
            onChange={handleChange('description')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="description"
            size = "medium"
          />
        </FormControl>
        </Grid>

        <Grid item sm={12} md={12} xs={12}>
      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Addresse</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={formValues.addresse}
            onChange={handleChange('addresse')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="description"
            size = "medium"
          />
        </FormControl>
        </Grid>
        </Grid>
        </Box>
    
      </Grid>
      <Grid container item  md={6} xs={12} sm={12} 
  alignItems="center">

   

      <Grid container justifyContent="center" item md={12} xs={12} sm={12}>
    

        <Button
  variant="contained"
  component="label"
>
  Upload Image
  <Input onChange={(event) => handleFileRead(event)}
    type="file"
    hidden
  ></Input>
</Button></Grid>


<Grid container justifyContent="center" item md={12} sm={12} xs={12}>

   

<Box
component="img"
sx={{
  m : 2,
  height : 250 ,
  width : {
    sm : 320 ,
    md : 340 ,
    lg : 500 ,
    xs : 250 ,
  
  } ,
  borderRadius : 5 ,
  borderColor : 'black' ,
  borderSpacing : 5 ,
  border : 1
}}
alt="Project Image"
src= {formValues.image === '' || formValues.image === null || formValues.image === undefined ? "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png" : formValues.image  }
/>
        
    
     </Grid>
</Grid>
        
      </Grid>

      <Grid  container sm={12} md={12} xs={12}  sx  = {{
        padding : 5
      }} justifyContent = "center">
           <Button
  variant="contained"
  component="label" onClick={editProject}
>
  Edit Project
  
</Button>
        
      </Grid>
    
   
        
     

      
    
      </Paper>

    

     

      
    </Box>
    </Grid>

    <Grid container  md={12} sm={12}  >

      <Paper  elevation={3} sx={{
    width : {
      xs : 350 ,
      sm : 450 ,
      md : 800 ,
      lg : '100%'
    }
  }}>


      <Grid container spacing={3}  md={12} sm={12}>

        <Grid  container
  direction="row"
  justifyContent="space-around"
  alignItems="center" item md={12} sm={12} xs={12} >

          <Typography variant="h4" component="div" gutterBottom sx={{m:4}}>
            Project  documents
          </Typography>

          <Button
  variant="contained"
  component="label" onClick={editProject}
>
  Add 
  
</Button>

        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={ { m : 2}}>

          <Paper elevation={3} >

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} >
        <TableHead sx={{backgroundColor: "blue"}}>
          <TableRow sx={{backgroundColor: "blue"}}>
            <StyledTableCell>Document Name </StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Downlaod</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {documentRows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.docmentName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Description}</StyledTableCell>
              <StyledTableCell align="right">{row.Type}</StyledTableCell>
              <StyledTableCell align="right"> <Button
  variant="contained"
  component="label" onClick={editProject}
>
  Download
  
</Button></StyledTableCell>
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


          </Paper>

        </Grid>
        <Grid item md={12} sm={12} xs={12}>


        </Grid>


      </Grid>

      </Paper>


    </Grid>

    <Grid container  md={12} sm={12}  >

<Paper  elevation={3} sx={{
width : {
xs : 350 ,
sm : 450 ,
md : 800 ,
lg : '100%'
}
}}>


<Grid container spacing={3}  md={12} sm={12}>

  <Grid  container
direction="row"
justifyContent="space-around"
alignItems="center" item md={12} sm={12} xs={12} >

    <Typography variant="h4" component="div" gutterBottom sx={{m:4}}>
      Project Related personnel
    </Typography>

    <Button
variant="contained"
component="label" onClick={() => setOpenCollaborator(true)}
>
Add

</Button>

  </Grid>
  <Grid item md={12} sm={12} xs={12} sx={ { m : 2}}>

    <Paper elevation={3} >

  <TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} >
  <TableHead sx={{backgroundColor: "blue"}}>
    <TableRow sx={{backgroundColor: "blue"}}>
      <StyledTableCell>Name </StyledTableCell>
      <StyledTableCell align="right">organization </StyledTableCell>
      <StyledTableCell align="right">email</StyledTableCell>
      <StyledTableCell align="right">role</StyledTableCell>
      
    
    
    </TableRow>
  </TableHead>
  <TableBody>
    {collaboratorsRows.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell >
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="right">{row.society}</StyledTableCell>
        <StyledTableCell align="right">{row.email}</StyledTableCell>
        <StyledTableCell align="right">{row.role}</StyledTableCell>
        
        
      </StyledTableRow>
    ))}
  </TableBody>
</Table>

<Dialog maxWidth="md" open={openCollaborator} >
                  <DialogTitle>
                    ajouter un collaborateur
                  </DialogTitle>
   
        <DialogContent>
        <form >
                        <Grid container spacing={4}>

                        <Grid item xs={3}>
                                <TextField
                                    label="Numero"
                                    type="number"
                                    required
                                    fullWidth
                                    name="name"
                                 
                                />
                            </Grid>

                            <Grid item xs={9}>
                                <TextField
                                    label="description"
                                    type="text"
                                    required
                                    fullWidth
                                    name="description"
                                 
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Name"
                                    type="text"
                                    required
                                    fullWidth
                                    name="name"
                                 
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="societé"
                                    type="text"
                                    required
                                    fullWidth
                                    name="societé"
                                 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="abr"
                                    type="text"
                                    name="abr"
                                    required
                                    fullWidth
                                   
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="addresse"
                                    type="text"
                                    name="addresse"
                                    required
                                    fullWidth
                                 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="email"
                                    type="email"
                                    required
                                    name="email"
                                    fullWidth
                                
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="phone"
                                    type="number"
                                    required
                                    fullWidth
                                    name="phone"
                                 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={() => setOpenCollaborator(false)} disableElevation>
                                    Close
                                </Button>
                                <Button
                                    style={{ marginLeft: '15px' }}
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    disableElevation
                                    onClick={() => setOpenCollaborator(false)}
                                >
                                    add
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
          
        </DialogContent>
      
      </Dialog>
</TableContainer>


    </Paper>

  </Grid>
  <Grid item md={12} sm={12} xs={12}>


  </Grid>


</Grid>

</Paper>


</Grid>


<Grid container  md={12} sm={12}  >

<Paper  elevation={3} sx={{
width : {
xs : 350 ,
sm : 450 ,
md : 800 ,
lg : '100%'
}
}}>


<Grid container spacing={3}  md={12} sm={12}>

  <Grid  container
direction="row"
justifyContent="space-around"
alignItems="center" item md={12} sm={12} xs={12} >

    <Typography variant="h4" component="div" gutterBottom sx={{m:4}}>
    Lots de travaux
    </Typography>

    <Button
variant="contained"
component="label" onClick={() => setOpenLot(true)}
>
Add

</Button>

  </Grid>
  <Grid item md={12} sm={12} xs={12} sx={ { m : 2}}>

    <Paper elevation={3} >

  <TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} >
  <TableHead sx={{backgroundColor: "blue"}}>
    <TableRow sx={{backgroundColor: "blue"}}>
      <StyledTableCell>Name </StyledTableCell>
      <StyledTableCell align="right">organization </StyledTableCell>
      <StyledTableCell align="right">email</StyledTableCell>
      <StyledTableCell align="right">role</StyledTableCell>
      
    
    
    </TableRow>
  </TableHead>
  <TableBody>
    {collaboratorsRows.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell >
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="right">{row.society}</StyledTableCell>
        <StyledTableCell align="right">{row.email}</StyledTableCell>
        <StyledTableCell align="right">{row.role}</StyledTableCell>
        
        
      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>


                <Dialog maxWidth="md" open={openLot} >
                  <DialogTitle>
                    ajouter lot de travaux
                  </DialogTitle>
   
        <DialogContent>
        <form >
                        <Grid container spacing={4}>

                        <Grid item xs={3}>
                                <TextField
                                    label="Numero"
                                    type="number"
                                    required
                                    fullWidth
                                    name="name"
                                 
                                />
                            </Grid>

                            <Grid item xs={9}>
                                <TextField
                                    label="description"
                                    type="text"
                                    required
                                    fullWidth
                                    name="description"
                                 
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Name"
                                    type="text"
                                    required
                                    fullWidth
                                    name="name"
                                 
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="societé"
                                    type="text"
                                    required
                                    fullWidth
                                    name="societé"
                                 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="abr"
                                    type="text"
                                    name="abr"
                                    required
                                    fullWidth
                                   
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="addresse"
                                    type="text"
                                    name="addresse"
                                    required
                                    fullWidth
                                 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="email"
                                    type="email"
                                    required
                                    name="email"
                                    fullWidth
                                
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="phone"
                                    type="number"
                                    required
                                    fullWidth
                                    name="phone"
                                 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={() => setOpenLot(false)} disableElevation>
                                    Close
                                </Button>
                                <Button
                                    style={{ marginLeft: '15px' }}
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    disableElevation
                                    onClick={() => setOpenLot(false)}
                                >
                                    add
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
          
        </DialogContent>
      
      </Dialog>


    </Paper>

  </Grid>
  <Grid item md={12} sm={12} xs={12}>


  </Grid>




</Grid>

</Paper>


</Grid>
    </Paper  >

   

  </>
  )
}
