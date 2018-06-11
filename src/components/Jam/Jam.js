import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './jam.scss';

class Jam extends Component {
  componentDidMount() {
    //console.log('Jam mounted');
  }

  render() {
    return (
      <div id="container" className="jam">
        <h2>{this.props.name}</h2>
        <img
          className="jam-image"
          src={this.props.image}
          alt={this.props.name}
        />

        <div id="actions" className="jam-actions">
          <div className="jam-add-button">
            <a href="www.google.com">
              <img src="/assets/images/plus.png" alt="add" />
            </a>
          </div>

          <div id="remove" className="jam-remove-button">
            <a href="www.google.com">
              <img src="/assets/images/remove.png" alt="remove" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Jam.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Jam;
