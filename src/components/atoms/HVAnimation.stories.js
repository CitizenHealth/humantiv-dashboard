import React from 'react';
import { 
	SharedColors,
	SharedAnimations
} from '../../resources';
import { HVAnimation } from '.';

export default {
  title: 'HVAnimation',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.white, textAlign: 'center' }}>{storyFn()}</div>]
};

export const Loading = () => (
	<HVAnimation 
		source={SharedAnimations.loading}
	/>
)
