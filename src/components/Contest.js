import React, { Component, PropTypes } from 'react';

class Contest extends Component {
  render() {
    return (
      <div className="Contest">
        <div className="contest-description">
          Description: {this.props.description}{' '}
        </div>{' '}
        <div className="home-link link">Contest Link </div>{' '}
      </div>
    );
  }
}

export default Contest;
