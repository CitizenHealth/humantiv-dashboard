import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SharedColors } from '../../resources';
import { HVBarchart } from '.';

const data = [
	{
		name: "Fitbit",
		value: 2391,
		color: SharedColors.blue
	},
	{
		name: "Misfit",
		value: 571,
		color: SharedColors.blue
	},
	{
		name: "Withings",
		value: 143,
		color: SharedColors.blue
	},
	{
		name: "Apple",
		value: 2534,
		color: SharedColors.blue
	},
	{
		name: "None",
		value: 5690,
		color: SharedColors.blue
	}
];

const journey = [
	{
		name: "Immunity",
		value: 1524,
		color: SharedColors.blue
	},
	{
		name: "Longevity",
		value: 354,
		color: SharedColors.darkGreen
	},
	{
		name: "Performance",
		value: 4193,
		color: SharedColors.darkYellow
	},
	{
		name: "Energy",
		value: 2654,
		color: SharedColors.darkRed
	}
];

export default {
  title: 'HVBarChart',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.background, textAlign: 'center' }}>{storyFn()}</div>]
};

export const Trackers = () => {

  return (
    <HVBarchart 
      title="Fitness Trackers"
      data={data}
    />
  )
}

export const Journey = () => {

  return (
    <HVBarchart 
      title="Journey"
      data={journey}
    />
  )
}
