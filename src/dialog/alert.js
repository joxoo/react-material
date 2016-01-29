import React, { PropTypes } from 'react';
import { getClasses } from  '../addons';
import FlatButton from '../buttons/flat-button';

@getClasses

class DialogAlert extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        agree: PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        }).isRequired,
        disagree: PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        }).isRequired
    };
    render() {
        const {
            title,
            children,
            content,
            agree,
            disagree,
            ...others
        } = this.props;

        return (
            <div className='dialog-wrapper'>
                <div className='dialog-overlay'>
                    <div className={ this.getClasses('dialog-alert', others) }>
                        <div className='dialog-alert-content'>
                            { title && <h4 className='dialog-alert-title'>{ title }</h4> }
                            <div className='dialog-alert-content-box'>{ content ? content : children }</div>
                        </div>
                        <div className='dialog-alert-actions'>
                            <FlatButton {...disagree} />
                            <FlatButton {...agree} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DialogAlert;