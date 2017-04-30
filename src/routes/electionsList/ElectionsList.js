import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ElectionsList.scss';

function ElectionsList({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>...</p>
      </div>
    </div>
  );
}

ElectionsList.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(ElectionsList, s);
