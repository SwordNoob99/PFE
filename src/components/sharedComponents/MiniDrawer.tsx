import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { SidebarData } from './SidebarData';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Navigate } from 'react-router-dom';
import { changeState } from '../features/appBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import './MiniDrawer.css';
import Login from '../accessComponents/Login';
import { logout } from '../features/userSlice';
import { Navigator } from 'react-router-dom';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {  justLogged} from '../features/userSlice';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Store from "../../store/Store.js"
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { remove } from '../features/userProjectsSlice';
import { Button, FormControl, Grid, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { DatePicker } from "@material-ui/pickers";
import { DateTimePicker, KeyboardDateTimePicker , MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const drawerWidth = 240;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {


 

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [temp , setTemp] = React.useState(true);
  const justLoggedin = useSelector((state : any ) => state.userReducer.justLoggedIn)
  const user = useSelector((state : any) => state.userReducer.user.user)

  React.useEffect(() => {
      setTimeout(() => {
        dispatch(justLogged(false))
        setTemp(false)
      }, 2000);
   
  }, [justLoggedin])
  const handleDrawerOpen = () => {
    setOpen(true);

    dispatch(changeState (true))
  };

  const handleDrawerClose = () => {
    setOpen(false);

    dispatch(changeState (false))
  };

  const logOut = () => {

    setLoading(true)
    setTimeout(() => {

      dispatch(logout ())
      dispatch(remove ())
      
    }, 2000);
    
    
 persistStore(Store).purge()
    
    

  }

  const [barOpen, setBarOpen] = React.useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setBarOpen(false);
  };
  const handleClick = () => {
    setBarOpen(true);
  };


  const [ loading , setLoading] = React.useState(false);

  const [userPage , setUserPage] = React.useState(false);

  const handleClickOpenUsr = () => {
    setUserPage(true);
  };

  const handleCloseUser = () => {
    setUserPage(false);
  };
  const [selectedDate, handleDateChange] = React.useState(new Date("2018-01-01T00:00:00.000Z"));

 

  return (
<>

<Snackbar open={justLoggedin} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Logged in successfully
        </Alert>
      </Snackbar>
    
    <Box sx={{ display: 'flex' }}>
    <Dialog  PaperProps={{
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }} maxWidth="md" open={loading} >
   
        <DialogContent>
        {loading && <CircularProgress color="secondary" />} 
          
        </DialogContent>
      
      </Dialog>
  
      <CssBaseline />
      <AppBar position="fixed" open={open}>
      <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>

  <Grid item>

        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MTS Group Construction Management
          </Typography>
       
          
          
        </Toolbar>

        </Grid>

        <Grid item sx={{marginRight:2 }}>

        <div className='user-button' onClick={handleClickOpenUsr}>

          <AccountCircleIcon/>
          
          {user.email}
          
        </div>

        <Dialog
        fullScreen
        open={userPage}
        onClose={handleCloseUser}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseUser}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add a user
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseUser}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <Grid  container sm={12} md={12} xs={12} justify="flex-end" >
      
      <Grid item md={6} xs={12} sm={12}> 
   
      <Box  sx={{ width: '100%' , p:4 , mt:10 }}>

        <Grid spacing={4} container sm={12} md={12} xs={12} justify="flex-end">

          <Grid item sm={12} md={12} xs={12}>
          <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">First Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
       
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="name"
            size = "medium"
          />
        </FormControl>
      </Grid>
      <Grid item sm={12} md={12} xs={12}>
      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Last Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
         
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="description"
            size = "medium"
          />
        </FormControl>
        </Grid>

        <Grid item sm={12} md={12} xs={12}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">City</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
           
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="description"
            size = "medium"
          />
        </FormControl>
        </Grid>

        <Grid item sm={12} md={12} xs={12}>
      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">zip</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
           
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
           
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="description"
            size = "medium"
          />
        </FormControl>
        </Grid>

        <Grid item sm={12} md={12} xs={12}>
      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Tel</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
           
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="description"
            size = "medium"
          />
        </FormControl>
        </Grid>

        <Grid item sm={12} md={12} xs={12}>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
       

      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label="date of birth"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="yyyy/MM/dd HH:mm"
      />
        </MuiPickersUtilsProvider>
        </Grid>
        </Grid>
        </Box>
    
    </Grid>

    <Grid item md={6} xs={12} sm={12}>  

    <Box  sx={{ width: '100%' , p:4 , mt:10 }}>

<Grid spacing={4} container sm={12} md={12} xs={12} justify="flex-end">

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
  height : 200 ,
  width : {
    sm : 320 ,
    md : 140 ,
    lg : 200 ,
    xs : 250 ,
  
  } ,
  borderRadius : 5 ,
  borderColor : 'black' ,
  borderSpacing : 5 ,
  border : 1
}}
alt="Project Image"
src= { "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"   }
/>
        
    
     </Grid>
        </Grid>
        </Box>
        

    
     </Grid>
    </Grid>
        
      </Dialog>

</Grid>
        </Grid>
       
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {SidebarData.map((item, index) => (
            <ListItem   to = {item.path} component={Link} key={index} disablePadding sx={{ display: 'block' }} style={{ textDecoration: 'none' }}>
              
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText className='listItem' primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
             
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          
            <ListItem component={Link} to="/project"   disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={logOut}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {<LogoutIcon/>}
                </ListItemIcon>
                <ListItemText className='listItem' primary="LogOut" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        
        </List>
      </Drawer>

     
    </Box>
    </>
  );
}
