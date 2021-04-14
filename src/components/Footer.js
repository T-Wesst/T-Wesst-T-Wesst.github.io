import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://tyroowest.me">
        Tyroo West
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    position: 'fixed',
    left: 0,
    textAlign: 'center',
    right: 0,
    top: '87%',
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  socials: {
    padding: '0 5px',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <a
            className={classes.socials}
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon color="action" fontSize="medium" />
          </a>
          <a
            className={classes.socials}
            href="https://www.instagram.com/tyroo_west/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon color="action" fontSize="medium" />
          </a>
          <a
            className={classes.socials}
            href="https://github.com/T-Wesst"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon color="action" fontSize="medium" />
          </a>
          <a
            className={classes.socials}
            href="https://www.linkedin.com/in/tyroowest/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon color="action" fontSize="medium" />
          </a>

          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
