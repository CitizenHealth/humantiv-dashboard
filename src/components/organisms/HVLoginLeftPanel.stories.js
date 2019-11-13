import React from 'react';
import { 
	SharedColors,
	SharedImages
 } from '../../resources';
import { HVLoginLeftPanel } from '.';

export default {
  title: 'HVLoginLeftPanel',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.background, textAlign: 'center' }}>{storyFn()}</div>]
};

export const Logo = () => {

  return (
		<HVLoginLeftPanel 
			onLogin={() => console.log('Login')}
		/>
  )
}