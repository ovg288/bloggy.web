import React from 'react';
import './App.css';
import { Container, Button } from '@material-ui/core';
import PrimarySearchAppBar from './component/PrimarySearchAppBar';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LeftMenu from './component/LeftMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <Container maxWidth="lg" fixed="true" className="App">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <LeftMenu />
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>Content</Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
