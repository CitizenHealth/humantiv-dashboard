import React from 'react';
import { Grid } from '@material-ui/core';
import {
  Group,
  Hotel,
  AccountBalance,
  DirectionsRun,

} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { SharedColors } from '../../resources';
import HVStatCard from '../atoms/HVStatCard';
import HVMenuBar from '../molecules/HVMenuBar';
import HVBarchart from '../atoms/HVBarChart';
import { 
	useFetch,
	formatCount,
	formatMoney
} from '../../business'

const useStyles = makeStyles({
	root: {
		flex: 1, 
		backgroundColor: SharedColors.background, 
		textAlign: 'center'
	},
	content:{
		marginTop:10
	},
  totalUserIcon: {
    backgroundColor: SharedColors.yellow,
    color: SharedColors.darkYellow,
    height: 40,
    width: 40,
    borderRadius: 40,
    padding: 10
  },
  averageSleepIcon: {
    backgroundColor: SharedColors.red,
    color: SharedColors.darkRed,
    height: 40,
    width: 40,
    borderRadius: 40,
    padding: 10
  },
  totalMeditIcon: {
    backgroundColor: SharedColors.blue30,
    color: SharedColors.darkBlue,
    height: 40,
    width: 40,
    borderRadius: 40,
    padding: 10
  },
  totalActivityIcon: {
    backgroundColor: SharedColors.green,
    color: SharedColors.darkGreen,
    height: 40,
    width: 40,
    borderRadius: 40,
    padding: 10
  },
  totalStepsIcon: {
    backgroundColor: SharedColors.purple,
    color: SharedColors.darkPurple,
    height: 40,
    width: 40,
    borderRadius: 40,
    padding: 10
  }
});

const HVBoard = () => {
	const classes = useStyles();
	const [data, medit, devices, journeys, loading, reFetch] = useFetch();

	return (
		<div className={classes.root}>
			<Grid 
				container
				direction="column"
			>
				<Grid >
					<HVMenuBar
						title="Statistics"
					/>
				</Grid>
				<Grid className={classes.content}>
					<Grid 
						container
						direction="row"
						justify="space-around"
					>
						<HVStatCard 
							title={formatCount(data)}
							subtitle="Total Users"
							loading={loading}
						>
							<Group className={classes.totalUserIcon}/>
						</HVStatCard>
						<HVStatCard 
							title={formatMoney(medit)}
							subtitle="Total Medit"
							loading={loading}
						>
							<AccountBalance className={classes.totalMeditIcon}/>
						</HVStatCard>
						<HVStatCard 
							title="Coming Soon"
							subtitle="Average Sleep Hours"
							loading={loading}
							isComingSoon
						>
							<Hotel className={classes.averageSleepIcon}/>
						</HVStatCard>
						<HVStatCard 
							title="Coming Soon"
							subtitle="Total Steps"
							loading={loading}
							isComingSoon
						>
							<AccountBalance className={classes.totalActivityIcon}/>
						</HVStatCard>
						<HVStatCard 
							title="Coming Soon"
							subtitle="Total Activity Minutes"
							loading={loading}
							isComingSoon
						>
							<DirectionsRun className={classes.totalStepsIcon}/>
						</HVStatCard>
					</Grid>
					<Grid
						container
						direction="row"
						justify="space-around"
						style={{
							marginTop: 20,
							marginBottom: 20
						}}
					>
						<HVBarchart 
							title="Fitness Trackers"
							data={devices}
							loading={loading}
						/>
						<HVBarchart 
							title="Journey"
							data={journeys}
							loading={loading}
						/>
					</Grid>
				</Grid>
      </Grid>
    </div>
	)
}

export default HVBoard;