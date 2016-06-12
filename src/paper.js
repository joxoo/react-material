import React, { PropTypes } from 'react';
import { getClassesStatic } from  './addons/get-classes';

const Paper = (props) => (
    <div className={ getClassesStatic('paper', props) }>{ props.children }</div>
);

Paper.propTypes = {
    circle: PropTypes.bool,
    rounded: PropTypes.bool,
    transition: PropTypes.bool,
    depth: PropTypes.number
};

Paper.defaultProps = {
    circle: false,
    rounded: true,
    transition: true,
    depth: 1
};

export default Paper;
