import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Grid,Box,Paper} from '@material-ui/core';
 
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
 
const useStyles = makeStyles((theme) => ({
    root: {
      //flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
     margin:"5px"
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color:"gray"
    },
    inputRoot: {
      color: 'black',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    search: {
      position: 'relative',
      marginLeft:"20px",
      borderRadius: theme.shape.borderRadius,
      backgroundColor:"white",
      '&:hover': {
        backgroundColor: "white",
      },
      //marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
  }));
 
const Responsive = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography  className={classes.title}>
              Home
            </Typography>
            <Typography  className={classes.title}>
              Product
            </Typography>
            <Typography  className={classes.title}>
              Sales
            </Typography>
            <Typography  className={classes.title}>
              Reports
            </Typography>
            <Grid container justify="flex-center">
              <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Button color="inherit">Login</Button>
            </Grid>
          </Toolbar>
        </AppBar>
 
        <Grid container spacing={0}>
         <Grid item xs={12}>
           <img src="Images/banner-1.jpg" width="100%" height="400px"/>
         </Grid>
        </Grid> 
      </div>
    )
}
 