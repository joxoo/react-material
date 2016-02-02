import React, { PropTypes } from 'react';
import { getClasses } from  '../addons';
import AppBar from '../app-bar';
import IconButton from '../buttons/icon-button';
import FlatButton from '../buttons/flat-button';

@getClasses

class DialogFullScreen extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        confirmation: PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        }),
        cancel: PropTypes.func.isRequired
    };
    render() {
        const {
            title,
            children,
            confirmation,
            cancel,
            ...others
        } = this.props;

        const elementRight =  confirmation ? <FlatButton {...confirmation } /> : null;
        const elementLeft = <IconButton icon={ confirmation ? 'clear' : 'arrow_back' } onClick={ cancel }/>;

        return (
            <div className='dialog-wrapper'>
                <div className={ this.getClasses('dialog-fullscreen', others) }>
                   <AppBar title={ title } elementLeft={ elementLeft } elementRight={ elementRight } />
                    <div className='dialog-fullscreen-content'>{ children }</div>
                </div>
            </div>
        );
    }
}

export default DialogFullScreen;
