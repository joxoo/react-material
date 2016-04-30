import React, { PropTypes } from 'react';
import { getClasses, touchPoint, hasTouchEvents } from  '../addons';
import FontIcon from '../font-icon';

@getClasses
@hasTouchEvents
@touchPoint

class MenuItem extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.shape({
            background: PropTypes.string,
            color: PropTypes.string,
            icon: PropTypes.string
        }) ]),
        onClick: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);

        this._handleAnmation = this._handleAnmation.bind(this);
        this.setTouchReference = this.setTouchReference.bind(this);
        this.setTouchTapReference = this.setTouchTapReference.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this, props.value);
    }

    onClickHandler(value, event) {
        this._handleAnmation(event);
        this.props.onClick(value, event);
    }

    render() {
        const { label, icon, ...others } = this.props;
        const fontIcon = typeof icon === 'string' ? { icon } : icon;

        return (
            <div { ...others } className={ this.getClasses('menu-item', others) }
               onClick={ this.onClickHandler } ref={ this.setTouchReference }>
                <strong className='menu-item-label'>{ label }</strong>
                { fontIcon && <FontIcon className='menu-item-icon' {...fontIcon} /> }
                <span className='menu-item-tap' ref={ this.setTouchTapReference } />
            </div>
        );
    }
}

export default MenuItem;
