import React, { Component } from 'react';
import './TimelineGenerator.css';
import Generator from './generator';

class TimelineGeneratorMaster extends Component {
  render() {
    return (
      <div className="App">
        <h1>Timeline Generator</h1>
        <Generator className="Generator" />
      </div>
    );
  }
}

export default TimelineGeneratorMaster;
