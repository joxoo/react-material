import React from 'react';
import PropTypes from 'prop-types';
import { getClassesStatic } from './addons/get-classes';

const FontIcon = (props) => (
    <i className={ getClassesStatic('font-icon', props) }>
        { props.icon.startsWith('0x') ? String.fromCharCode(props.icon) : props.icon }
    </i>
);

FontIcon.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string
};

export default FontIcon;
