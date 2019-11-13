import React from 'react';
import { 
	SharedColors,
	SharedImages
 } from '../../resources';
import { HVLoginRightPanel } from '.';

export default {
  title: 'HVLoginRightPanel',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.background, textAlign: 'center' }}>{storyFn()}</div>]
};

export const Logo = () => {

  return (
		<HVLoginRightPanel 
			image={SharedImages.logo}
		/>
  )
}