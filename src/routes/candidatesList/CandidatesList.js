import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CandidatesList.scss';

function CandidatesList({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>...</p>
      </div>
    </div>
  );
}

CandidatesList.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(CandidatesList, s);
