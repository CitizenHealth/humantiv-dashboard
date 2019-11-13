import React from 'react';
import {
  GTranslate 
 } from '@material-ui/icons';
 import { makeStyles } from '@material-ui/core/styles';
import { 
	SharedColors,
	SharedImages
} from '../../resources';
import { HVButton } from '.';

export default {
  title: 'HVButton',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.white, textAlign: 'center' }}>{storyFn()}</div>]
};

export const Google = () => (
	<HVButton 
		icon={SharedImages.google}
		round
		color={SharedColors.white}
		onClick={() => console.log(`Button Pressed`)}
	/>
)

export const Humantiv = () => (
	<HVButton 
		icon={SharedImages.logo}
		round={false}
		color={SharedColors.white}
		onClick={() => console.log(`Button Pressed`)}
	/>
)