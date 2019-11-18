import React from 'react';
import { SharedColors } from '../../resources';
import {HVProgress} from './';


export default {
  title: 'HVProgress',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.background, textAlign: 'center' }}>{storyFn()}</div>]
};

export const Top = () => {

  return (
    <HVProgress
    />
  )
}
