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
        const { modal, ...others, children } = this.props;
        return (
            <div { ...others } className={ this.getClasses('bottom-sheet', { ...others }) }>
                { modal && <div className='bottom-sheet-layer' /> }
                <div className='bottom-sheet-content'>{ children }</div>
            </div>
        );
    }

}

export default BottomSheet;
