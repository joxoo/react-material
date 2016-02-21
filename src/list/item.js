import React, { PropTypes } from 'react';
import { getClasses, touchPoint, hasTouchEvents } from  '../addons';
import FontIcon from '../font-icon';

@getClasses
@hasTouchEvents
@touchPoint

class ListItem extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.shape({
            background: PropTypes.string,
            color: PropTypes.string,
            icon: PropTypes.string
        }) ]),
        touchable: PropTypes.bool
    };

    constructor(props, context) {
        super(props, context);
        if (props.touchable) {
            this.touchable();
        }
    }

    touchable() {
        this._handleTouchStart = this._handleTouchStart.bind(this);
        this._handleTouchEnd = this._handleTouchEnd.bind(this);
        this._handleMouseDown = this._handleMouseDown.bind(this);
        this._handleMouseUp = this._handleMouseUp.bind(this);

        this.setTouchReference = this.setTouchReference.bind(this);
        this.setTouchTapReference = this.setTouchTapReference.bind(this);
    }

    render() {
        const { title, icon, touchable, children, ...others } = this.props;
        const fontIcon = typeof icon === 'string' ? { icon } : icon;

        if (touchable) {
            Object.assign(others, {
                ref: this.setTouchReference,
                onTouchStart: this._handleTouchStart,
                onTouchEnd: this._handleTouchEnd,
                onMouseDown: this._handleMouseDown,
                onMouseUp: this._handleMouseUp
            });
        }

        return (
            <li className={ this.getClasses('list-item', others) } { ...others } >
                { fontIcon && <FontIcon className='list-item-icon' {...fontIcon} /> }
                { title && <span className={ `list-item-title` }>{ title }</span> }
                { children }
                { touchable && <span className='list-item-tap' ref={ this.setTouchTapReference } /> }
            </li>
        );
    }
}

export default ListItem;
