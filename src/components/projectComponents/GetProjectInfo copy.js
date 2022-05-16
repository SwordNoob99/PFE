import  "./GetProject.css";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Documents from "./Documents";
import Sharing from "./Sharing";
import Info from "./Info";
import axios from 'axios';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { useState } from 'react';
import Popup from "../popUpComponents/Popup";
import Project from "./Project";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { RiFileInfoFill  } from "react-icons/ri";
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

import MailIcon from '@mui/icons-material/Mail';


  
  function createData(name, calories, fat, carbs, protein) {
  
    return { name, calories, fat, carbs, protein };
  }

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  

 
class GetProjectInfo extends Component {
    
    
  state = {
    projects: [] ,
    isOpen : false ,
    navLoaded : false ,
    comp : 1
  }
  constructor(props) {
    super(props);
    
    this.setState.bind(this)
   
  }




    componentDidMount() {

      axios.get(`http://127.0.0.1:8082/api/v1/Project/projects`).then(
        res => {
           
            this.setState({ projects : res.data }, () => console.log(this.state.projects));
            
          
        },
    ).catch(error => {
      console.log(error)
    } )


          this.setState({
              navLoaded : true
          })

          

    }


    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

   
    Open(){

    let  temp = this.state.isOpen;
      if (temp === true){
        temp = false ;
      }else {
        temp = true;
      }

      this.setState({ isOpen : temp })

    }



    render() {

      
       
  return (

<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>

  );
    }
}


export default GetProjectInfo;