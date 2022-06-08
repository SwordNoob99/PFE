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
import { CircularProgress, Input, MenuItem, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { addProject } from '../features/projectSlice';
import { State } from '@mui/system/cssVars/useCurrentColorScheme';
import { makeStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';
import Snackbar from '@mui/material/Snackbar';
import { selectFirstProject } from '../features/projectSlice';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { saveAs } from 'file-saver';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DownloadIcon from '@mui/icons-material/Download';
// Core viewer
import { Document, Page, pdfjs } from "react-pdf";




export default function GetProjectInfo() {


  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess =  ( numPages ) => {
    setNumPages(numPages);
  }

  const [pdfOpen , setPdfOpen] = useState(false)
  const [url , setUrl] = useState("")

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // UPDATE PROJECT INFO 

  const select = useSelector
  const dispatch = useDispatch;
  const accessToken = select((state : any )=> state.userReducer.user.accessToken)
  const project_id =  select((state : any )=> state.projectReducer.fullProject.selectedProject.id)
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

  const [project , setProject] = useState<any[]>([]);

  let temp  = useSelector((state : any)  => state.projectReducer.fullProject.selectedProject) ;
  let isProjectSelected  = useSelector((state : any)  => state.projectReducer.fullProject.projectSelected) 


  // GET SELECTED PROJECT FROM REDUX

  let selectedProject : any = null 

  
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

          console.log(result.data.project)
          const temp = result.data.project;
          

          
   
                      
        }
        ).catch(error => {
          console.log(error)
        } )
      
      }

      const editProject = () => {
        handleClick()
        promise()
        
        
        
      }


 

  
      const [projectid , setProjectId] = useState(useSelector((state) => state.projectReducer.fullProject.selectedProject.id));

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [projectName , setProjectName] = useState()
  const [formValues , setFormValues] = useState({
    projectName : '',
    description : '',
    constructionType : '',
    image_url : '' ,
    addresse : '' ,
    image : ''
  })


  useEffect(()=>{

    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    // SEND REQUEST TO GET PROJECT
    console.log(projectid)
    axios.get(`http://127.0.0.1:8000/api/v1/project?project_id=`+projectid , {
      'project_id' : projectid 
    
    }).then ( result => {

      console.log(result)

      setFormValues({
        projectName : result.data.project.projectName ,
        description : result.data.project.description ,
      constructionType : result.data.project.constructionType ,
      image_url :result.data.project.image_url ,
      addresse : result.data.project.addresse
      })

      
     
                  
    }
    ).catch(error => {
      console.log(error)
    } )



    axios.post(`http://127.0.0.1:8000/api/v1/documentByProject`, {
      'project_id' : projectid ,

    
    }).then ( result => {

      

      setDocumentRows(result.data.documents)
  
      
  
                  
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



    axios.post(`http://127.0.0.1:8000/api/v1/colbs`, {
      'project_id' : projectid ,
      
    
    }).then ( result => {
      setLoading(false)
      let colabs = result.data.data 
      setCollaboratorsRows(colabs)

      

                  
    }
    ).catch(error => {
      console.log(error)
    } )

    // descs

    axios.post(`http://127.0.0.1:8000/api/v1/lots`, {
      'project_id' : projectid ,
      
    
    }).then ( result => {
      setLoading(false)
      let descs = result.data.data 
      setDescs(descs)

      console.log(descs)

      

                  
    }
    ).catch(error => {
      console.log(error)
    } )
  
    

    console.log(formValues)


  } , [selectedProject])

 



const [snackBarOpen , setSnackBarOpen] = useState(false)
const [file , setFile] = useState();
const { Upload } = require("upload-js")
const upload = new Upload({apiKey: "public_kW15arb4FUZhopvZDDgVuCd3efCY"})
   const uploadFile = () =>  upload.createFileInputHandler({


    onBegin : () => {


      setLoading(true)
    } ,

    
    onUploaded: ({ fileUrl, fileId }) => {
    
      
      console.log(fileId)
      setFormValues({ ...formValues ,
        image_url : fileUrl
      });

      setLoading(false)
    
    }
   });

   const uploadDocument = () =>  upload.createFileInputHandler({


    onBegin : () => {


      setLoading(true)
    } ,

    
    onUploaded: ({ fileUrl, fileId }) => {
    
      
      console.log(fileId)
      setFile(fileId)

      

      axios.post(`http://127.0.0.1:8000/api/v1/document`, {
      'project_id' : projectid ,
      'fileName' : fileId
    
    }).then ( result => {

      console.log(result)

      

                  
    }
    ).catch(error => {
      console.log(error)
    } )

    
    axios.post(`http://127.0.0.1:8000/api/v1/documentByProject`, {
      'project_id' : projectid ,

    
    }).then ( result => {

      

      setDocumentRows(result.data.documents)
  
      
  
                  
    }
    ).catch(error => {
      console.log(error)
    } )


  

    setLoading(false)
      setDocumentUpload(true)
    
    }

    
   });



   const handleClick = () => {
    setSnackBarOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBarOpen(false);
  };


/// HANDLE DOCUMENTS



const [documentRows , setDocumentRows] = useState([]);

/// HANDLE COLLABORATORS ARRAY
const [loading , setLoading] = useState(true);

const [collaboratorsRows , setCollaboratorsRows] = useState([])

// handle lots descs

const [descs , setDescs] = useState([])

const [aLots , setALots] =  useState([])
// DOCUMENT TABLE 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0e519e",
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

/// document upload state



const [documentUpload , setDocumentUpload] = useState(false)




const handleCloseDocument = (event?: React.SyntheticEvent | Event, reason?: string) => {
  if (reason === 'clickaway') {
    return;
  }

  setDocumentUpload(false);
};

/// ADD COLLABORATOR STATE MANAGEMENT

const [openCollaborator , setOpenCollaborator] = useState(false)

/// ADD lot de travaux STATE

const [openLot , setOpenLot] = useState(false)

/// ADD DOCUMENT 

const [openAddDocument , setOpenAddDocument] = useState(true)

// download document
var FileSaver = require('file-saver');
const downloadFile = (id ) => {

  var FileSaver = require('file-saver');
  

  const temp = documentRows.find((element) => {
    return element.id === id;
  })

  let url = upload.url(temp.documentUrl);

  FileSaver.saveAs(url, temp.documentUrl+".pdf");
  
  console.log("here")
}

// document View

const pdfView = (id ) => {

 
  

  const temp = documentRows.find((element) => {
    return element.id === id;
  })

  let url = upload.url(temp.documentUrl);
  console.log(url)
  setUrl("C:/Users/Oussama/Downloads/kW15arbJjFL25qnWxnfXxiD.pdf")
  setPdfOpen(true)
}




  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({ ...formValues, [prop]: event.target.value });
      console.log(event.target.value)
    };

    /// COLLABORATEUR

    const [colabForm , setColabForm] = useState({
      preName : "",
      lastName : "",
      abr : "",
      society : "",
      email : "",
      role : "",
      addresse : "",
      phone : ""
    });

    const handleColabChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setColabForm({ ...colabForm, [prop]: event.target.value });
      console.log(event.target.value)
    };

    /// lot des travaux

    const [lotForm , setlotForm] = useState({
      collab_id : "",
      desc_id : "",
    
    });

    const handleLotChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setlotForm({ ...lotForm, [prop]: event.target.value });
      console.log(event.target.value)
    };

    const handleAddCollab = () => {

      
      setLoading(true)
      
      axios.post(`http://127.0.0.1:8000/api/v1/colb`, {
      'project_id' : projectid ,
      'preName' : colabForm.preName ,
      'lastName' : colabForm.lastName ,
      'abr' : colabForm.abr ,
      'addresse' : colabForm.addresse ,
      'phone' : colabForm.phone ,
      'email' : colabForm.email ,
      'role' : colabForm.role ,
      'society' : colabForm.society
    
    }).then ( result => {
      setLoading(false)
      setOpenCollaborator(false)
      console.log(result)

      

                  
    }
    ).catch(error => {
      console.log(error)
    } )

    }

    const handleAddlot = () => {

      
      setLoading(true)
      
      axios.post(`http://127.0.0.1:8000/api/v1/addlot`, {
      'project_id' : projectid ,
      'collab_id' : lotForm.collab_id ,
      'desc_id' : lotForm.desc_id ,
   
    
    }).then ( result => {
      setLoading(false)
      setOpenLot(false)
      console.log(result)

      

                  
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
    } )


    axios.post(`http://127.0.0.1:8000/api/v1/getLots`, {
      'project_id' : projectid ,

    
    }).then ( result => {

      

      setALots(result.data.data)
      console.log("lot" + result.data.data)
  
      
  
                  
    }
    ).catch(error => {
      console.log(error)
    } )

    }




  return (

    <>

<Dialog  PaperProps={{
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }} maxWidth="md" open={pdfOpen}>
   
        <DialogContent>
        <div>
      <Document file="./kW15arbRG7gsPs7SByqsV7Q.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
          
        </DialogContent>
      
      </Dialog>

    
    
    
  <Paper elevation={3} sx={{
    width : {
      xs : 350 ,
      sm : 450 ,
      md : 800 ,
      lg : '100%'
    } ,  borderRadius : 20
  }} >
  <Grid sx={{backgroundColor : "#0e519e" ,  borderTopLeftRadius : 80 , borderTopRightRadius : 80 }} container >
  <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Le projet a été modifier avex succées
        </Alert>
      </Snackbar>
      <Snackbar open={documentUpload} autoHideDuration={6000} onClose={handleCloseDocument}>
        <Alert onClose={handleCloseDocument} severity="success" sx={{ width: '100%' }}>
          Le document à été ajouté
        </Alert>
      </Snackbar>
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
  <Box sx={{ width: '100%' , m : 4 }}>
  <Paper elevation={2} sx={{ borderTopLeftRadius : 80 , borderTopRightRadius : 80 }} >
{/** EDIT PROJECT */}

      <Grid  container sm={12} md={12} xs={12} justify="flex-end" >
      
      <Grid item md={6} xs={12} sm={12}> 
   
      <Box  sx={{ width: '100%' , p:4 }}>

        <Grid spacing={4} container sm={12} md={12} xs={12} justify="flex-end">

          <Grid item sm={12} md={12} xs={12}>
          <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel  htmlFor="outlined-adornment-amount">Nom du projet</InputLabel>
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
  

        <FormControl fullWidth sx={{ m: 1  }}>
  <InputLabel id="demo-simple-select-label"> Type de construction</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
            value = {formValues.constructionType}
    label="phase de la visite"
    onChange={handleChange('constructionType')}
  >
    <MenuItem value={1}>Aeroport</MenuItem>
    <MenuItem value={2}>Appartement</MenuItem>
    <MenuItem value={4}>Atelier</MenuItem>
    <MenuItem value={5}>Atelier d'artiste</MenuItem>
    <MenuItem value={3}>Boulangerie</MenuItem>
    <MenuItem value={6}>Boutique</MenuItem>
    <MenuItem value={7}>Bureaux</MenuItem>
    <MenuItem value={8}>Cafe</MenuItem>
    <MenuItem value={9}>Centre administratif</MenuItem>
    <MenuItem value={10}>Centre commercial</MenuItem>
    <MenuItem value={11}>Centre culturel</MenuItem>
    <MenuItem value={12}>Centre d'appels</MenuItem>
    <MenuItem value={13}>Centre de conferences</MenuItem>
    <MenuItem value={14}>Centre de traitement</MenuItem>
    <MenuItem value={15}>Cinema</MenuItem>
    <MenuItem value={16}>Clinique</MenuItem>
    <MenuItem value={17}>college</MenuItem>
    <MenuItem value={18}>Commerce</MenuItem>
    <MenuItem value={19}>Creche</MenuItem>
    <MenuItem value={20}>Ecole</MenuItem>
  </Select>
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
  sx={{backgroundColor : "#0e519e"}}
>
  ajouter une image
  <Input onChange={uploadFile()}
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
src= {formValues.image_url === '' || formValues.image_url === null || formValues.image_url === undefined ? "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png" : formValues.image_url  }
/>
        
    
     </Grid>
</Grid>
        
      </Grid>

      <Grid  container sm={12} md={12} xs={12}  sx  = {{
        padding : 5
      }} justifyContent = "center">
           <Button  sx={{backgroundColor : "#0e519e"}}
  variant="contained"
  component="label" onClick={editProject}
>
  modifier le projet
  
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
           les documents de projets
          </Typography>

          <Button  sx={{backgroundColor : "#0e519e"}}
  variant="contained"
  component="label"
>
  ajouter un document
  <Input onChange={ uploadDocument()}
    type="file"
    hidden
  ></Input>
</Button>

        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={ { m : 2}}>

          <Paper elevation={3} >

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} >
        <TableHead sx={{backgroundColor: "#0e519e"}}>
          <TableRow sx={{backgroundColor: "#0e519e"}}>
            <StyledTableCell>Nom de document </StyledTableCell>
           
          
            <StyledTableCell  align="right"></StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {documentRows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.documentUrl}
              </StyledTableCell>

           
          
              <StyledTableCell align="right"> <Button  sx={{backgroundColor : "#0e519e"}}
  variant="contained"
  component="label" onClick={(event) => downloadFile(row.id )}
>
  <DownloadIcon />

  
  
</Button>

<Button onClick={(event) => pdfView(row.id )} sx={{backgroundColor : "#0e519e" , marginLeft : 2}}
  variant="contained"
  component="label"><RemoveRedEyeIcon /></Button>

</StyledTableCell>
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog maxWidth="md"  >
                  <DialogTitle>
                    ajouter un collaborateur
                  </DialogTitle>
   
        <DialogContent>
    

      
          
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
      Project Related personnel
    </Typography>

    <Button  sx={{backgroundColor : "#0e519e"}}
variant="contained"
component="label" onClick={() => setOpenCollaborator(true)}
>
Ajouter un collaborateur

</Button>

  </Grid>
  <Grid item md={12} sm={12} xs={12} sx={ { m : 2}}>

    <Paper elevation={3} >

  <TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} >
  <TableHead sx={{backgroundColor: "blue"}}>
    <TableRow sx={{backgroundColor: "blue"}}>
      <StyledTableCell>Nom </StyledTableCell>
      <StyledTableCell align="right">organisation </StyledTableCell>
      <StyledTableCell align="right">email</StyledTableCell>
      <StyledTableCell align="right">role</StyledTableCell>
      
    
    
    </TableRow>
  </TableHead>
  <TableBody>
    {collaboratorsRows.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell >
          {row.preName + " " + row.lastName}
        </StyledTableCell>
        <StyledTableCell align="right">{row.society}</StyledTableCell>
        <StyledTableCell align="right">{row.email}</StyledTableCell>
        <StyledTableCell align="right"></StyledTableCell>
        
        
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

                        <Grid item xs={12}>
                        <FormControl fullWidth sx={{ m: 1  }}>
  <InputLabel id="demo-simple-select-label"> Role</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value = {colabForm.role}
    onChange={handleColabChange('role')}
    label="phase de la visite"

  >
    <MenuItem value={1}>Maitre d'oeuvre</MenuItem>
    <MenuItem value={2}>Maitre d'ouvrage</MenuItem>
    <MenuItem value={4}>Maitre d'ouvrage délégué</MenuItem>
    <MenuItem value={5}>AMOE</MenuItem>
    <MenuItem value={3}>AMOA</MenuItem>
    <MenuItem value={6}>Assistant à maitrise d'oeuvre</MenuItem>
    <MenuItem value={7}>Assistant à maitrise d'ouvrage</MenuItem>
    <MenuItem value={8}>Exploitant</MenuItem>
    <MenuItem value={9}>Architect</MenuItem>
    <MenuItem value={10}>Maitre d'oeuvre d'execution</MenuItem>
    <MenuItem value={11}>Bet Electricité</MenuItem>
    <MenuItem value={11}>Bet Plomberie</MenuItem>

  </Select>
</FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    label="Nom"
                                    type="text"
                                    value = {colabForm.lastName}
    onChange={handleColabChange('lastName')}
                                    required
                                    fullWidth
                                    name="Nom"
                                 
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Prenom"
                                    type="text"
                                    required
                                    fullWidth
                                    value = {colabForm.preName}
    onChange={handleColabChange('preName')}
                                    name="Prenom"
                                 
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="societé"
                                    type="text"
                                    required
                                    fullWidth
                                    value = {colabForm.society}
    onChange={handleColabChange('society')}
                                    name="society"
                                 
                                />
                            </Grid>
                          
                            <Grid item xs={12}>
                                <TextField
                                    label="abr"
                                    type="text"
                                    name="abr"
                                    required
                                    value = {colabForm.abr}
    onChange={handleColabChange('abr')}
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
                                    value = {colabForm.addresse}
    onChange={handleColabChange('addresse')}
                                 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="email"
                                    type="email"
                                    required
                                    name="email"
                                    fullWidth
                                    value = {colabForm.email}
    onChange={handleColabChange('email')}
                                
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="phone"
                                    type="number"
                                    required
                                    fullWidth
                                    name="phone"
                                    value = {colabForm.phone}
    onChange={handleColabChange('phone')}
                                 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button  sx={{backgroundColor : "#0e519e"}} variant="contained" onClick={() => setOpenCollaborator(false)} disableElevation>
                                    Close
                                </Button>
                                <Button  sx={{backgroundColor : "#0e519e"}}
                                    style={{ marginLeft: '15px' }}
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    disableElevation
                                    onClick={handleAddCollab}
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
     sx={{backgroundColor : "#0e519e"}}
variant="contained"
component="label" onClick={() => setOpenLot(true)}
>
Ajouter un lot de traveau

</Button>

  </Grid>
  <Grid item md={12} sm={12} xs={12} sx={ { m : 2}}>

    <Paper elevation={3} >

  <TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} >
  <TableHead sx={{backgroundColor: "blue"}}>
    <TableRow sx={{backgroundColor: "blue"}}>
      <StyledTableCell>Nom </StyledTableCell>
      
      <StyledTableCell align="right">Collaborateur</StyledTableCell>
      
    
    
    </TableRow>
  </TableHead>
  <TableBody>
  {aLots.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell   key={row.id }>
        { row.name }
        </StyledTableCell>

        <StyledTableCell  key={row.id } align="right">

        { row.preName + " " + row.lastName}
        </StyledTableCell>
        
        
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
        <form  onSubmit={(e) => e.preventDefault()}>
                        <Grid container spacing={4}>

                      

                            <Grid item xs={9}>
                            <FormControl fullWidth sx={{ m: 1  }}>
  <InputLabel id="demo-simple-select-label"> Description</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={lotForm.desc_id}
    onChange={handleLotChange('desc_id')}
    label="phase de la visite"

  >
    { descs?.map((row) => (

<MenuItem key = {row.id} value={row.id}>{row.name}</MenuItem>

    ))}
    
  

  </Select>
</FormControl>
                            </Grid>
                         
                            <Grid item xs={12}>
                            <FormControl fullWidth sx={{ m: 1  }}>
  <InputLabel id="demo-simple-select-label"> Collaborateur</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={lotForm.collab_id}
    onChange={handleLotChange('collab_id')}
    label="phase de la visite"

  >
      { collaboratorsRows?.map((row) => (

<MenuItem key = {row.id} value={row.id}>{row.preName + " " + row.lastName}</MenuItem>

    ))}
  

  </Select>
</FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button   sx={{backgroundColor : "#0e519e"}}variant="contained" onClick={() => setOpenLot(false)} disableElevation>
                                    Close
                                </Button>
                                <Button  sx={{backgroundColor : "#0e519e"}}
                                    style={{ marginLeft: '15px' }}
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    disableElevation
                                    onClick={handleAddlot}
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
