import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import uid from 'uid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
	},
	mainTitle: {
		textAlign: 'center'
	}
});

const PlacesList = (props) => {
	const { classes } = props;
	return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cellHeight={180}>
				<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.mainTitle} color="inherit" >	
						Forecast Place 
					</ListSubheader>
        </GridListTile>
				{props.places.map(place => (
          <GridListTile key={uid(10)}>
						<img src={`./assets/images/forecast.png`} className={classes.forecastTile} alt={place.title} />
            <GridListTileBar
              title={place.title}
							subtitle={<span>Time: {place.time} ºF {place.temperature.F} ºC {place.temperature.C} </span>}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <InfoIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
			</GridList>
		</div>
	);
}

export default withStyles(styles)(PlacesList);