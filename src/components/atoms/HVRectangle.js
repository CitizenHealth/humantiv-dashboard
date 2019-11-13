import React from 'react';
import { Rectangle } from 'react-shapes';
import PropTypes from 'prop-types';

const HVRectangle = ({
	height,
	width,
	color,
	stroke,
}) => {
	return (
		<Rectangle
			width={width} 
			height={height} 
			fill={{color: color}} 
			strokeWidth={stroke}
		/>
	)
}

HVRectangle.propTypes={
	height: PropTypes.number,
	width: PropTypes.number,
	color: PropTypes.string,
	stroke: PropTypes.number
};

HVRectangle.defaultProps={
	height: 20,
	width: 100,
	color: 'black',
	stroke: 0
};
export default HVRectangle;
