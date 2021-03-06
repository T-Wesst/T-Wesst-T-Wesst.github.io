import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Pokedex from '../images/pokedex.jpg';
import PawfectPet from '../images/pawfect-pet.jpg';
import cliTool from '../images/cli-tool.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: 40,
  },
  gridList: {
    width: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    height: 16,
  },
}));

const tileData = [
  {
    img: Pokedex,
    title: 'Pokedex',
    tech: 'MERN',
    cols: 3,
    url: 'https://github.com/T-Wesst/pokedex-project',
  },
  {
    img: PawfectPet,
    title: 'Pawfect-Pet',
    tech: 'MERN',
    cols: 1,
    url: 'https://github.com/T-Wesst/pawfect-pet',
  },
  {
    img: cliTool,
    title: 'Amazon-CLI',
    tech: 'Node-MySQL',
    cols: 2,
    url: 'https://github.com/T-Wesst/Amazon-Zip',
  },
];
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Stack: {tile.tech}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`}>
                  <a href={tile.url} target="_blank" rel="noreferrer">
                    <LaunchIcon className={classes.icon} />
                  </a>
                  <a href={tile.url} target="_blank" rel="noreferrer">
                    <GitHubIcon className={classes.icon} />
                  </a>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
