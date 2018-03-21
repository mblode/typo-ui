import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import style from './style.scss';

/**
 * @render react
 * @name Badge
 * @example
 * <Badge text="Im a Hero!" primary />
 */

const Badge = ({ text, primary }) => (
  <a href="#" className={style.Button} data-primary={primary}>
    {text}
  </a>
);

Badge.propTypes = {
  /**
   * @property {boolean} primary determines is a primary button (emphasized)
   */
  primary: PropTypes.bool,

  /**
   * @property {string} text label to be displayed within the button
   */
  text: PropTypes.string
}

Badge.defaultProps = {
  text: 'Hero Button!',
  primary: true,
}

export default Badge;
