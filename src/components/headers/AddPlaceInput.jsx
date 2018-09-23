import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

const AddPlaceInput = (props) => {
  const { classes } = props;
  return (
		<Input
			name="placeToAdd"
			className={classes.input}
			endAdornment={
				<InputAdornment position="end">
					<IconButton className={classes.button} aria-label="Add" onClick={props.addPlaces}>
						<AddIcon/>
					</IconButton>
				</InputAdornment>
			}
		/>
  )
}

AddPlaceInput.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddPlaceInput);
