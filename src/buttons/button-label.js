import React from 'react';
import PropTypes from 'prop-types';
import {getClassesStatic} from '../addons/get-classes';

const FlatButtonLabel = (props) => (
    <span className={ getClassesStatic('flat-button-label', props) }>{ props.label }</span>
);

FlatButtonLabel.propTypes = {
    label: PropTypes.string
};

export default FlatButtonLabel;
