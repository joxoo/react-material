import React from 'react';
import PropTypes from 'prop-types';
import { getClassesStatic } from  '../addons/get-classes';

const ProgressLinear = (props) => (
    <div className={ getClassesStatic('progress-linear', { [props.type]: true }) }>
        <div className='progress-bar' />
    </div>
);

ProgressLinear.propTypes = {
    type: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'determinate-indeterminate'])
};

ProgressLinear.defaultProps = {
    type: 'indeterminate'
};

export default ProgressLinear;
