import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../app-bar';
import IconButton from '../buttons/icon-button';
import FlatButton from '../buttons/flat-button';
import { getClassesStatic } from '../addons/get-classes';

const DialogFullScreen = (props) => {
    const { confirmation, title, cancel, children, ...others } = props;
    const elementRight =  props.confirmation ? <FlatButton {...confirmation } /> : null;
    const elementLeft = <IconButton icon={ confirmation ? '0xE14C' : '0xE5C4' } onClick={ cancel }/>;

    return (
        <div className='dialog-wrapper'>
            <div className={ getClassesStatic('dialog-fullscreen', others) }>
                <AppBar title={ title } elementLeft={ elementLeft } elementRight={ elementRight } />
                <div className='dialog-fullscreen-content'>{ children }</div>
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
