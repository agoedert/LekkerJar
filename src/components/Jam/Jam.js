import React, { Component } from 'react';

class Jam extends Component {
  componentDidMount() {
    console.log('Jam mounted');
  }

  render() {
    return (
      <div>
        <h1>Mermelada de Ciruela</h1>
        <img
          src="/assets/images/mermelada-ciruela.png"
          alt="Mermelada de Ciruela"
        />
      </div>
    );
  }
}

export default Jam;
