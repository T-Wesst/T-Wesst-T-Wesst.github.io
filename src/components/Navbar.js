import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Avatar>TW</Avatar>
          </Typography>

          <Button color="inherit">
            <Link className={classes.link} to="/">
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/projects">
              Projects
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <CssBaseline />
    </div>
  );
}
