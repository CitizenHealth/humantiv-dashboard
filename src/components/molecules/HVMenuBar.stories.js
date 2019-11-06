import React from 'react';
import { SharedColors } from '../../resources';
import { HVMenuBar } from '.';

export default {
  title: 'HVMenuBar',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.background, textAlign: 'center' }}>{storyFn()}</div>]
};

export const NoProfileImage = () => {

  return (
		<HVMenuBar
			title="Statistics"
		/>
  )
}