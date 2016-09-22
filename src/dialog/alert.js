import React, { PropTypes } from 'react';
import DialogOverlay from './overlay';
import DialogWrapper from './wrapper';
import FlatButton from '../buttons/flat-button';
import { getClassesStatic } from '../addons/get-classes';

const DialogAlert = (props) => (
    <DialogWrapper>
        <DialogOverlay>
            <div className={ getClassesStatic('dialog-alert', props) }>
                <div className='dialog-alert-content'>
                    { props.title && <h4 className='dialog-alert-title'>{ props.title }</h4> }
                    <div className='dialog-alert-content-box'>{ props.content ? props.content : props.children }</div>
                </div>
                <div className='dialog-alert-actions'>
                    { props.disagree && <FlatButton {...props.disagree} /> }
                    <FlatButton {...props.agree} />
                </div>
            </div>
        </DialogOverlay>
    </DialogWrapper>
);

DialogAlert.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    agree: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired,
    disagree: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    })
};

export default DialogAlert;
