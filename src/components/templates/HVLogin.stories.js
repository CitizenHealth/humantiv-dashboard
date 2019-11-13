import React from 'react';
import { 
	SharedColors,
 } from '../../resources';
import { HVLogin } from '.';

export default {
  title: 'HVLogin',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.background, textAlign: 'center' }}>{storyFn()}</div>]
};

export const Logo = () => {

  return (
		<HVLogin 
			onLogin={() => console.log('Login')}
		/>
  )
}