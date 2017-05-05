import React from 'react';
import ElectionsList from './ElectionsList';

// import fetch from '../../core/fetch';

export const path = '/electionsList';
export const action = async (state) => {
  const title = 'Contact Us';
  state.context.onSetTitle(title);
  return <ElectionsList title={title} />;

  // const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  // const { data } = await response.json();
  // state.context.onSetTitle('React.js Starter Kit');
  // return <ElectionsList news={data.news} />;
};
