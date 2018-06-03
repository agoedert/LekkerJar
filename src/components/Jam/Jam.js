import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Jam extends Component {
  componentDidMount() {
    //console.log('Jam mounted');
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img
          src={this.props.image}
          alt={this.props.name}
        />
      </div>
    );
  }
}

Jam.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Jam;
