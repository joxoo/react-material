import React, { PropTypes } from 'react';
import { getClassesStatic } from  './addons/get-classes';

const Snackbar = (props) => (
    <div {...props} className={ getClassesStatic('snackbar', props) }>
        <div className='snackbar-content'>
            <span className='snackbar-message'>{ props.message }</span>
            { props.actionHandler && <span className='snackbar-action' onClick={ props.actionHandler } >
                { props.actionLabel }</span> }
        </div>
    </div>
);

Snackbar.propTypes = {
    message: PropTypes.string,
    actionLabel: PropTypes.string,
    actionHandler: PropTypes.func
};

export default Snackbar;
