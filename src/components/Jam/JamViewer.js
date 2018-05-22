import React, { Component } from 'react';
import Jam from './Jam';

class JamViewer extends Component {
  componentDidMount() {
    console.log('JamViewer mounted');
  }

  render() {
    return <Jam />;
  }
}

export default JamViewer;
