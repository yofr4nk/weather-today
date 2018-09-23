import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import AddPlaceInput from './AddPlaceInput';


const styles = () => ({
  flex: {
    flexGrow: 1,
  },
  barColor: {
    backgroundColor: blue[500]
  }
});

const HeaderWeatherApp = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" className={classes.barColor}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            WeatherApp
          </Typography>
          <AddPlaceInput addPlaces={props.addPlaces}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderWeatherApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderWeatherApp);