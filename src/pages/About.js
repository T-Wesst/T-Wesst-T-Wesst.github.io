import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
import ProfilePic from '../images/profile_pic.jpg';
import ProjectList from '../components/ProjectList';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px auto',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    justifyContent: 'center',
  },
  media: {
    height: 180,
    maxWidth: 180,
    border: 'solid 5px #e0e0e0',
    borderRadius: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },
  avatar: {
    backgroundColor: red[500],
  },
  content: {
    maxWidth: 400,
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);

  const loadAbout = () => {
    setAbout((current) => !current);
    console.log(`about: ${about} || projects: ${projects}`);
  };

  const loadProjects = () => {
    setProjects((current) => !current);
    console.log(`about: ${about} || projects: ${projects}`);
  };

  return (
    <div className={classes.root}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia
            className={classes.media}
            image={ProfilePic}
            title="Paella dish"
          />
        </div>
        <CardHeader
          title="Tyroo West"
          subheader="Building beautiful solutions for the web."
        />
        <ButtonGroup
          className={classes.mobile}
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          <Button color="primary" variant="contained" onClick={loadAbout}>
            About
          </Button>
          <Button color="primary" variant="contained" onClick={loadProjects}>
            Projects
          </Button>
        </ButtonGroup>
      </div>
      <div className={classes.content}>
        {about ? (
          <Card>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Hi I'm Tyroo West Front End Web Developer based in Los Angeles,
                California. I am passionate about building web applications and
                communicating technical concepts to non-technical folks. I bring
                a passion for clean and easy to use user interfaces to every
                project I work on. My mission is to reshape the future by
                transforming simple websites into robust technical solutions
                that will put them ahead of their competitors. I am currently
                available for new opportunities whether you're a person with an
                idea, a company with a mission, or a fellow developer looking to
                network, connect with me and lets continue the conversation.
              </Typography>
            </CardContent>
          </Card>
        ) : null}
        {projects ? <ProjectList /> : null}
      </div>
    </div>
  );
}
