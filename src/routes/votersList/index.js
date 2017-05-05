import React from 'react';
import VotersList from './VotersList';

// import fetch from '../../core/fetch';

export const path = '/votersList';
export const action = async (state) => {
  const title = 'Contact Us';
  state.context.onSetTitle(title);
  return <VotersList title={title} />;

  // const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  // const { data } = await response.json();
  // state.context.onSetTitle('React.js Starter Kit');
  // return <VotersList news={data.news} />;
};
