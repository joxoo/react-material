import React, { PropTypes } from 'react';
import { getClassesStatic } from './addons/get-classes';

const FontIcon = (props) => (
    <span className={ getClassesStatic('font-icon', props) }>{ props.icon }</span>
);

FontIcon.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string
};

export default FontIcon;
