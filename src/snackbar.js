import React, { PropTypes } from 'react';
import { getClasses } from  './addons';

@getClasses

class Snackbar extends React.Component {

    static propTypes = {
        message: PropTypes.string,
        actionLabel: PropTypes.string,
        actionHandler: PropTypes.func
    };

    render() {
        const { message, actionLabel, actionHandler, ...others } = this.props;

        return (
            <div {...others} className={ this.getClasses('snackbar', others) }>
                <div className='snackbar-content'>
                    <span className='snackbar-message'>{ message }</span>
                    { actionHandler && <span className='snackbar-action' onClick={ actionHandler } >
                        { actionLabel }</span> }
                </div>
            </div>
        );
    }
}

export default Snackbar;
