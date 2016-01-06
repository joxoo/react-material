import React, { PropTypes } from 'react';
import { getClasses } from './addons';

@getClasses

class BottomSheet extends React.Component {

    static propTypes = {
        modal: PropTypes.bool,
        inset: PropTypes.bool
    };

    static defaultProps = {
        modal: false,
        inset: false
    };

    render() {
        return (
            <div className={ this.getClasses('bottom-sheet', this.props ) }>
                { this.props.modal && <div className='bottom-sheet-layer' /> }
                <div className='bottom-sheet-content'>
                    { this.props.children }
                </div>
            </div>
        );
    }

}

export default BottomSheet;
