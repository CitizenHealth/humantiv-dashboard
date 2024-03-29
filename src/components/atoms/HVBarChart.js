import React from 'react';
import PropTypes from 'prop-types';
import { 
	BarChart,
	XAxis,
	YAxis,
	Cell,
	Bar
} from 'recharts';
import {
	Card,
	CardContent,
	Typography,
	Grid
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { SharedColors } from '../../resources'

const useStyles = makeStyles({
	card: {
    width: 450,
    height: 250,
    justifyContent: 'space-between',
    alignItems: 'center',
		borderRadius: 10
  },
	title: {
		fontSize: 16,
		textAlign: 'left',
		color: SharedColors.grey,
		borderBottomColor: SharedColors.grey,
		borderBottomWidth: 1,
	}
});

const renderLabel = ({
	x, 
	y, 
	width, 
	height, 
	value
}) => {

  return (
		<text 
			x={x+ width + 30} 
			y={y+height/2+6} 
			fill={SharedColors.black} 
			fontSize= {18} 
			textAnchor="middle"
			fontFamily="Roboto"
		>
			{value}
		</text>
  );
}

const HVBarchart = ({
	title,
	data,
	loading
}) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			{loading ? 
				<CardContent>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justify="flex-start"
				>
				<Skeleton variant="text" height={30} width="20%"/>
				<Skeleton variant="text" height={10} width="100%"/>
				<Skeleton variant="text" height={10} width="100%"/>
				<Skeleton variant="text" height={10} width="100%"/>
				<Skeleton variant="text" height={10} width="100%"/>
				<Skeleton variant="text" height={10} width="100%"/>
			</Grid>
				</CardContent>
			: 
				<CardContent>
					<Typography className={classes.title}>
						{title}
					</Typography>
					<hr  style={{
						color: SharedColors.grey,
						backgroundColor: SharedColors.grey,
						height: 0.25,
						borderColor : 'transparent'
					}}/>
					<BarChart
						layout="vertical"
						width={400} 
						height={200} 
						margin={{
							right: 50,
							bottom: 20
						}}
						data={data}
					>
						<XAxis hide type="number"/>
						<YAxis 
							tickLine={false} 
							axisLine={false} 
							type="category" 
							dataKey="name" 
							tick={{ 
								fontSize: 12, 
								fontFamily: "Roboto",
								fill: SharedColors.grey 
							}}
						/>
						<Bar 
							label={renderLabel}
							type="monotone" 
							dataKey="value" 
							fill={SharedColors.blue} 
							barGap={0}
							barSize={20}
							legendType='cross'
							maxBarSize={150}
						>
						{
							data ? data.map((entry, index) => {
								const color = entry.color;
								return <Cell key={entry} fill={color} />;
							}) : null
						}
						</Bar>
					</BarChart>
				</CardContent>
			}
		</Card>
	)
}

HVBarchart.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.number,
		color: PropTypes.string,
	})),
	loading: PropTypes.bool
}
export default HVBarchart;