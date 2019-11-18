import React from 'react';
import Lottie from 'lottie-react-web';
import PropTypes from  'prop-types';

const HVAnimation = ({
	source
}) => {
	return (
		<Lottie
			options={{
				animationData: source
			}}
			width= '50%'
			height= '50%'
		/>
	)
}

HVAnimation.propTypes = {
	source: PropTypes.object.isRequired
}

export default HVAnimation;