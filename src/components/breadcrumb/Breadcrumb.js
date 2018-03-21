import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import style from './style.scss';

/**
 * @render react
 * @name Breadcrumb
 * @example
 * <Breadcrumb text="Im a Hero!" primary />
 */

const Breadcrumb = ({ text, primary }) => (
  <a href="#" className={style.Button} data-primary={primary}>
    {text}
  </a>
);

Breadcrumb.propTypes = {
  /**
   * @property {boolean} primary determines is a primary button (emphasized)
   */
  primary: PropTypes.bool,

  /**
   * @property {string} text label to be displayed within the button
   */
  text: PropTypes.string
}

Breadcrumb.defaultProps = {
  text: 'Hero Button!',
  primary: true,
}

export default Breadcrumb;
