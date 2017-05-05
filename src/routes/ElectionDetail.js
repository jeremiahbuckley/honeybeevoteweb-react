import React, { PropTypes } from 'react';
import ElectionSetCandidates from './ElectionSetCandidates';

class ElectionDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = props;
    }
    
    render() {
        return (
            <div>
              <div className="row">
                  <div className="col-xs-3">{this.state.election._id}</div>
                  <div className="col-xs-2">{this.state.election.name}</div>
                  <div className="col-xs-2">{this.state.election.winThreshhold}</div>
                  <div className="col-xs-2">{this.state.election.voteSustainDuration}</div>
                  <div className="col-xs-2">{this.state.election.voterDormancyDuration}</div>
              </div>
              <div className="row">
                  <div className="col-xs-3">
                      <button ng-click="$ctrl.showSetCandidates()">
                          Set Candidates
                      </button>
                  </div>
                  <div className="col-xs-3">
                      <button ng-click="$ctrl.showCandidatesList()">
                          Candidate Details
                      </button>
                  </div>
                  <div className="col-xs-1">
                      <button ng-click="$ctrl.delete($ctrl.election._id)">
                          Delete
                      </button>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-1">
                      <label>&nbsp;</label>
                  </div>
                  <div className="col-xs-1">
                      <label>Candidates: </label>
                  </div>
                  <div className="col-xs-10">
                      <div className="col-xs-2">{this.state.election.candidateIds}</div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-1">
                      <label>&nbsp;</label>
                  </div>
                  <div className="col-xs-1">
                      <label>Voters: </label>
                  </div>
                  <div className="col-xs-110">
                      <div className="col-xs-2">{this.state.election.voterIds}</div>
                  </div>
              </div>
              <div className="row" ng-show="$ctrl.showCandidatesListPanel">
                  <div className="col-xs-1">&nbsp;</div>
                  <div className="col-xs-11">
                      <candidates-list candidates-in-election="$ctrl.election.candidateIds" election-id="$ctrl.election._id"></candidates-list>
                      <div className="row">
                          <div className="col-xs-4">
                              <button ng-click="$ctrl.closeCandidatesList()">
                                  Close Candidate Details
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
              <div ng-show="$ctrl.showCandidatesSelectPanel">
                  <ElectionSetCandidates on-save="$ctrl.candidatesSelectOnSave(candidateIdsList)" candidate-ids="$ctrl.election.candidateIds" candidates="$ctrl.candidates" on-cancel="$ctrl.candidatesSelectOnCancel()"></ElectionSetCandidates> 
              </div>
            </div>
        );
    }
}


// ElectionDetail.propTypes = { title: PropTypes.string.isRequired };

export default ElectionDetail;