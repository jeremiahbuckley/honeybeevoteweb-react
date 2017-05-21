import React from 'react';
import CandidatesList from './CandidatesList';

// import fetch from '../../core/fetch';

export const path = '/candidatesList';
export const action = async (state) => {
  const title = 'Contact Us';
  state.context.onSetTitle(title);
  return <CandidatesList title={title} />;
};
