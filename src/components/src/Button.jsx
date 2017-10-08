import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ text, onClick }) => (
  <div
    className={styles.button}
    onClick={onClick}
  >
    {text}
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
