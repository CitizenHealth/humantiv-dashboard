import React from 'react';
import {
  Group,
  Hotel,
  AccountBalance,
  DirectionsRun, 
 } from '@material-ui/icons';
 import { makeStyles } from '@material-ui/core/styles';
import { SharedColors } from '../../resources';
import { HVStatCard } from '.';

export default {
  title: 'HVStatCard',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.background, textAlign: 'center' }}>{storyFn()}</div>]
};

const useStyles = makeStyles({
  totalUserIcon: {
    backgroundColor: SharedColors.yellow,
    color: SharedColors.darkYellow,
    height: 25,
    width: 25,
    borderRadius: 25,
    padding: 10
  },
  averageSleepIcon: {
    backgroundColor: SharedColors.red,
    color: SharedColors.darkRed,
    height: 25,
    width: 25,
    borderRadius: 25,
    padding: 10
  },
  totalMeditIcon: {
    backgroundColor: SharedColors.blue30,
    color: SharedColors.darkBlue,
    height: 25,
    width: 25,
    borderRadius: 25,
    padding: 10
  },
  totalActivityIcon: {
    backgroundColor: SharedColors.green,
    color: SharedColors.darkGreen,
    height: 25,
    width: 25,
    borderRadius: 25,
    padding: 10
  },
  totalStepsIcon: {
    backgroundColor: SharedColors.purple,
    color: SharedColors.darkPurple,
    height: 25,
    width: 25,
    borderRadius: 25,
    padding: 10
  }
});

export const Users = () => {
  const classes = useStyles();

  return (
    <HVStatCard 
      title="2387"
      subtitle="Total Users"
    >
      <Group className={classes.totalUserIcon}/>
    </HVStatCard>
  )
}

export const Sleep = () => {
  const classes = useStyles();

  return (
    <HVStatCard 
      title="6.29"
      subtitle="Average Sleep Hours"
    >
      <Hotel className={classes.averageSleepIcon}/>
    </HVStatCard>
)
}

export const Medit = () => {
  const classes = useStyles();

  return (
    <HVStatCard 
      title="1.3M"
      subtitle="Total Medit"
    >
      <AccountBalance className={classes.totalMeditIcon}/>
    </HVStatCard>
)
}

export const Steps = () => {
  const classes = useStyles();

  return (
    <HVStatCard 
      title="20,345"
      subtitle="Total Steps"
    >
      <DirectionsRun className={classes.totalStepsIcon}/>
    </HVStatCard>
)
}

export const Activity = () => {
  const classes = useStyles();

  return (
    <HVStatCard 
      title="432.8"
      subtitle="Total Activity Minutes"
    >
      <DirectionsRun className={classes.totalActivityIcon}/>
    </HVStatCard>
)
}