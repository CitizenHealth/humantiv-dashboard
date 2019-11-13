import React from 'react';
import { SharedColors } from '../../resources';
import {HVTitle} from './';


export default {
  title: 'HVTitle',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.background, textAlign: 'center' }}>{storyFn()}</div>]
};

export const Users = () => {

  return (
    <HVTitle 
      title="Humantiv"
    />
  )
}
