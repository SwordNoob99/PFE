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
import { Typography } from '@mui/material';
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


interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  
  

  return (

    
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    textAlign:"center"
  },
  footer: {
    display:"flex",
    justifyContent:"center",
  },

  tr: {
    color: "#17202A",
    fontSize : "50px" ,
    textDecoration : "none" ,
    '&:hover': {
       background: "#212F3D",
       color: "white",
    },
  },

  

}));


export default function CustomPaginationActionsTable(props) {

 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [projectName , setProjectName] = React.useState("");

  
  
  

  const [rows , setRows] = useState([]);

  const [rerender, setRerender] = useState(false);



  
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const select = useSelector
  let projects =  select((state : any )=> state.userProjectsReducer.userProjects?.projects)

  // new state for loading

  const[loading , setLoading] = useState(false);

  // submit handler for create project

  // declare promise
  // get token first


  const accessToken = select((state : any )=> state.userReducer.user.accessToken)
  const user_id =  select((state : any )=> state.userReducer.user.user.id)
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  function  promise   (accessToken , user_id)  {

  
    
      
          
        // SEND REQUEST TO ADD PROJECT
        axios.post(`http://127.0.0.1:8000/api/v1/project` , {
          'projectName' : projectName
        }).then ( result => {

        
          let selectedProject = result.data.project;
         
          dispatch(addProject(selectedProject))

          let projectSelected = true
          dispatch(selectFirstProject({projectSelected}))
          setLoading(false)
          setProjectSele(false)
              
                      
        }
        ).catch(error => {
          console.log(error)
        } )

         // GET NEW PROJECTS ARRAY

         axios.get(`http://127.0.0.1:8000/api/v1/projectUser/`+user_id ).then(
          res => {
             
           let projects =  res.data.projects

           dispatch(add ({

            projects
            }))
           
            setLoading(false)


          },
      ).catch(error => {
        console.log(error)
      } )


       


      
    

  } 

  const createProject = () => {
    setLoading(true)
    setDialogueOpen(false);
    promise(accessToken , user_id)
    
   
    
  }

  useEffect(()=>{




        setRows(projects)
    
       
  } , [projects])
     

    const handleTextFieldChange = (event) => {
      setProjectName(event.target.value)
     
    }
     
   
 

  const dispatch = useDispatch();
  const [result, setResult] = useState(false);
  const handleSelectProject = (id) => {
    
    setLoading(true)

    setTimeout(() => {

      let selectedProject = rows.find((element) => {
        return element.id === id;
      })
  
       dispatch(addProject(selectedProject))
       setLoading(false)
       setResult(true)
      
    }, 3000);
    
   

  }

  const [projectSele , setProjectSele] = useState(true)

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [dialogueOpen , setDialogueOpen] = useState(false); 

  const handleClickDialogueOpen = () => {
    setDialogueOpen(true);
  };

  const  handleClickDialogueClose = () => {
    setDialogueOpen(false);
  };
  const classes = useStyles();

  return (

  

   
    <Dialog  PaperProps={{
style: {
backgroundColor: 'transparent',
boxShadow: 'none',
},
}} maxWidth="md" open={projectSele} >

<DialogContent>

{!!result && (
      <Navigate
        to={{ pathname: "/project", state: { data: result } }}
      />
    )}


    
    <Paper elevation={3}>





    <Grid className={classes.footer} >


      </Grid>
      <Grid item xs={2}  style={{ float : "right" }}>
      <Button onClick={handleClickDialogueOpen} variant="contained">Add</Button>
      </Grid>

     
<Grid item xs={12}>
      <Table  aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0 
            ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          )?.map((row) => (
            <TableRow className={classes.tr} key={row.id}>
              <TableCell  onClick={() => handleSelectProject(row.id)} scope="row">
                {row.projectName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.description}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Owner}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>

      <Dialog  PaperProps={{
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }} maxWidth="md" open={loading} onClose={handleClickDialogueClose}>
   
        <DialogContent>
        {loading && <CircularProgress color="secondary" />} 
          
        </DialogContent>
      
      </Dialog>

   
      </Grid>
     
      <Dialog maxWidth="md" open={dialogueOpen} onClose={handleClickDialogueClose}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new project name
          </DialogContentText>
          <TextField value={projectName} id="standard-basic" label="Standard" variant="standard" onChange={(event) => handleTextFieldChange(event)}/>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogueClose}>Cancel</Button>
          <Button onClick={createProject}>Add</Button>
        
        </DialogActions>
      </Dialog>
    </Paper>

    </DialogContent>

</Dialog>
  );

}

