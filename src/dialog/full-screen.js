import React, { PropTypes } from 'react';
import AppBar from '../app-bar';
import IconButton from '../buttons/icon-button';
import FlatButton from '../buttons/flat-button';
import { getClassesStatic } from '../addons/get-classes';

const DialogFullScreen = (props) => {
    const elementRight =  props.confirmation ? <FlatButton {...props.confirmation } /> : null;
    const elementLeft = <IconButton icon={ props.confirmation ? '0xE14C' : '0xE5C4' } onClick={ props.cancel }/>;

    return (
        <div className='dialog-wrapper'>
            <div className={ getClassesStatic('dialog-fullscreen', props) }>
               <AppBar title={ props.title } elementLeft={ elementLeft } elementRight={ elementRight } />
                <div className='dialog-fullscreen-content'>{ props.children }</div>
            </div>
        </div>
    );
};

DialogFullScreen. propTypes = {
    title: PropTypes.string.isRequired,
    confirmation: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }),
    cancel: PropTypes.func.isRequired
};

export default DialogFullScreen;
