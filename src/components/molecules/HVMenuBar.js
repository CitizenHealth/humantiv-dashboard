import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import {
	Grid,
	Typography,
	Avatar,
	Menu,
	MenuItem,
	ListItemIcon,
	ListItemText,
	IconButton
} from '@material-ui/core';
import {
	Settings,
	Power
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import { 
	SharedColors
 } from '../../resources';
 import { useAuth, getInitials } from '../../business';
 
const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
		height: 45,
		backgroundColor: SharedColors.white
	},
	rightGrid: {
		justifyContent: 'flex-end',
		paddingRight: 10
	},
	settingsIcon: {
    color: SharedColors.grey,
    height: 30,
    width: 30,
		borderRadius: 35,	
  },
	title: {
		color:SharedColors.grey,
	  marginLeft: 10
	},
	image: {
		height: 30,
		width: 30,
		marginRight: 10,
		color: '#fff',
    backgroundColor: deepOrange[500],
	}
}));

const HVMenu = ({
	title
}) => {
	
	const [user, loading, error, loginWithGoogle, logout] = useAuth();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const classes = useStyles();
	const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
		setAnchorEl(null);
		logout();
		history.goBack();
  };

	const StyledMenu = withStyles({
		paper: {
			border: '1px solid #d3d4d5',
		},
	})(props => (
		<Menu
			elevation={0}
			getContentAnchorEl={null}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			{...props}
		/>
	));

	const StyledMenuItem = withStyles(theme => ({
		root: {
			'&:focus': {
				backgroundColor: theme.palette.primary.main,
				'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
					color: theme.palette.common.white,
				},
			},
		},
	}))(MenuItem);
	
  return (
		<Grid 
			container
			item
			direction="row"
			justify="space-between"
			alignItems="center"
			className={classes.root}
		>
			<Grid>
				<Typography 
					variant="h5"
					component="h2"
					className={classes.title}
				>
					{title}
				</Typography>
			</Grid>
			<Grid>
				<Grid 
					container
					direction="row"
					justify="space-around"
					alignItems="center"
					className={classes.rightGrid}
				>
					{ (user && user.photoURL) ?
						<Avatar alt={user.displayName} src={user.photoURL} className={classes.image} />
						:
						<Avatar className={classes.image}>{user ? getInitials(user.displayName) : ""}</Avatar>
					}
					<IconButton aria-label="sign out" className={classes.margin} size="small" onClick={handleClick}>
						<Settings className={classes.settingsIcon}/>
					</IconButton>
					<StyledMenu
						id="customized-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}	
						onClose={handleClose}				
					>
						<StyledMenuItem onClick={handleClose}>
							<ListItemIcon>
								<Power fontSize="small" />
							</ListItemIcon>
							<ListItemText primary="Sign Out"/>
						</StyledMenuItem>
					</StyledMenu>
				</Grid>
			</Grid>
		</Grid>
  )
}

HVMenu.propTypes = {
	title: PropTypes.string
}

HVMenu.defaultProps = {
	title: 'Title'
}

export default HVMenu;