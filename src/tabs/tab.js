import React, { PropTypes } from 'react';
import {getClasses, touchPoint, hasTouchEvents} from '../addons';
import FontIcon from '../font-icon';

@touchPoint
@hasTouchEvents
@getClasses

class Tab extends React.Component {

    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.string.isRequired,
        icon: PropTypes.shape({
            background: PropTypes.string,
            color: PropTypes.string,
            icon: PropTypes.string
        }),
        onSelect: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        this._handleAnmation = this._handleAnmation.bind(this);
        this.setTouchReference = this.setTouchReference.bind(this);
        this.setTouchTapReference = this.setTouchTapReference.bind(this);
    }

    render() {
        const { label, icon, onSelect, value, ...others } = this.props;

        return (
            <button
                { ...others }
                onTouchStart={ this._handleAnmation }
                onMouseDown={ this._handleAnmation }
                onClick={ onSelect.bind(null, value) }
                className={ this.getClasses('tab-button', others) }
                ref={ this.setTouchReference }
            >
                <span className='tab-button-tap' ref={ this.setTouchTapReference }/>
                { icon && <FontIcon { ...icon } /> }
                { label && <span className='tab-button-label'>{ label }</span> }
            </button>
        );

    }
}

export default Tab;
