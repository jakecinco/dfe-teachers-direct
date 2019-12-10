import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as RouterLink} from 'react-router-dom';
import DfeLogo from './DFE.png';
import Tooltip from '@material-ui/core/Tooltip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DfE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>


        <img src={DfeLogo} alt="Logo" height="70"/>
        <br />

        <Typography component="h1" variant="h4">
          Teachers Direct
        </Typography>
        {/* <Typography component="" variant="caption1">
          Department for Education
        </Typography> */}

        <br />
        <Typography component="h1" variant="subtitle1" align="center">The only place to find all teacher vacancies in the UK where schools apply to you.</Typography>
       <br />
         <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                value="Kennedy"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value="Mashanda"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Date of Birth"
                name="email"
                autoComplete="email"
                value="19/05/1998"
              />
            </Grid>
            <Grid item xs={12}>
            <Tooltip title="Teacher reference number
Please note that you need to enter your number without “/” or “RP”. For example, if your number is “RP 99/12345”, just enter “9912345”. If your number is “68/12345” just enter “6812345”. If you don’t know what your teacher reference number is, this can usually be found on your payslip or teachers’ pension documentation; alternatively, please contact the DfE on QTS.enquiries@education.gsi.gov.uk or 0207 593 5394.">
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Teacher reference number (TRN)"
                value="4267162"
              />
              </Tooltip>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                variant="caption"
                label={<Typography variant="body2" align="center" color="textSecondary">I have read and agree to DfE Terms and Conditions and our GDPR compliant Privacy Policy.    You must agree to terms before signing up.</Typography>
            }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            component={RouterLink}
            to='/userprofile'
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item align="center"  >
              <Link href="#" variant="body2" to='/userprofile' component={RouterLink} >
              Already registered? Sign in here.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
