import React, { PropTypes } from 'react';
import { getClassesStatic } from './addons/get-classes';

const FontIcon = (props) => (
    <i className={ getClassesStatic('font-icon', props) }>{ String.fromCharCode(props.icon) }</i>
);

FontIcon.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string
};

export default FontIcon;
