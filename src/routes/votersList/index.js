import React from 'react';
import VotersList from './VotersList';

// import fetch from '../../core/fetch';

export const path = '/votersList';
export const action = async (state) => {
  const title = 'Contact Us';
  state.context.onSetTitle(title);
  return <VotersList title={title} />;
};
