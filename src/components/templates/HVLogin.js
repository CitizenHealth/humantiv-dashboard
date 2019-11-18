import React from 'react';
import {
	Grid
} from '@material-ui/core';
import HVLoginLeftPanel from '../organisms/HVLoginLeftPanel';
import HVLoginRightPanel from '../organisms/HVLoginRightPanel';
import { SharedImages } from '../../resources';
const HVLogin = ({
	onLogin
}) => {

	return (
		<Grid
			container 
			spacing={0}
		>
			<Grid
				style={{
					flex: 1
				}}
			>
				<HVLoginLeftPanel
					onLogin={onLogin}
				/>
			</Grid>
			<Grid
				style={{
					flex: 2
				}}
			>
				<HVLoginRightPanel
					image={SharedImages.logo}
				/>
			</Grid>
		</Grid>
	)
};

export default HVLogin;
