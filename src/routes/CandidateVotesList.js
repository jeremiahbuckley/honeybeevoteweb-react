import React, { PropTypes } from 'react';

class CandidateVotesList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div className= "row">
          <label className="col-xs-4">{this.props.vote.voterId}</label>
        </div>
        <div className= "row">
          <label className="col-xs-1">{this.props.vote.value}</label>
          <label className="col-xs-3">{this.props.vote.startTime}</label>
          <label className="col-xs-3">{this.props.vote.endTime}</label>
          <label className="col-xs-3">{this.props.vote.endDormancyTime}</label>
          <label className="col-xs-1">{this.props.vote.expired}</label>        
          <label className="col-xs-1">{this.props.vote.voterIsDormant}</label>
        </div>
      </div>
    );
  }
}

export default CandidateVotesList;