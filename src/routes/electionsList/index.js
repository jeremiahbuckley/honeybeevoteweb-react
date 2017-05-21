import React from 'react';
import ElectionsList from './ElectionsList';

// import fetch from '../../core/fetch';

export const path = '/electionsList';
export const action = async (state) => {
  const title = 'Contact Us';
  state.context.onSetTitle(title);
  return <ElectionsList title={title} />;
};
