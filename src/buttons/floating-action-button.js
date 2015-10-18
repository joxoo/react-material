import React, { PropTypes } from 'react';
import {getClasses, touchPoint, hasTouchEvents} from '../addons';
import FontIcon from '../font-icon';

@hasTouchEvents
@touchPoint
@getClasses

class FloatingActionButton extends React.Component {

    static  propTypes= {
        className: PropTypes.string,
        disabled: PropTypes.bool,
        icon: PropTypes.string,
        iconClassName: PropTypes.string,
        iconElement: PropTypes.element,
        size: PropTypes.oneOf([ 'small', 'normal' ])
    };

    static defaultProps = {
        size: 'normal'
    };

    constructor(...args) {
        super(...args);
        this._handleTouchEnd = this._handleTouchEnd.bind(this);
        this._handleMouseUp = this._handleMouseUp.bind(this);
    }

    _handleTouchEnd(event) {
        return (event.nativeEvent && event.nativeEvent.targetTouches) ?
            this.removeAnimatedTouchPoint() : null;
    }

    _handleMouseUp(event) {
        return (!this.hasTouchEvents() && event.nativeEvent) ?
            this.removeAnimatedTouchPoint() : null;

    }

    renderFontIcon( props ) {
        if (props.iconElement) {
            return props.iconElement;
        }
        if(!props.icon) {
            return null;
        }

        return (
            <FontIcon className={ props.iconClassName } disabled={ props.disabled } icon={ props.icon } />
        );
    }

    render() {
        const {
            disabled,
            className,
            size,
            ...others
            } = this.props;

        return (
            <button onTouchEnd={ this._handleTouchEnd }
                    onMouseUp={ this._handleMouseUp }
                    disabled={ disabled }
                    className={ this.getClasses('floating-action-button', { className, size }) }
                    ref='elementTouch'
                    { ...others } >
                <span className='floating-action-button-tap' ref='elementTouchTap'/>
                { this.renderFontIcon(this.props) }

            </button>
        );
    }
}

export default FloatingActionButton;
