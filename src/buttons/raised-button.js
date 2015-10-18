import React, { PropTypes } from 'react';
import {getClasses, touchPoint, hasTouchEvents} from '../addons';
import RaisedButtonLabel from './button-label';

function validateLabel (props, propName, componentName) {
    if (!props.children && !props.label) {
        return new Error('Required prop label or children was not ' +
            'specified in ' + componentName + '.');
    }
}

@touchPoint
@hasTouchEvents
@getClasses

class RaisedButton extends React.Component {

    static propTypes = {
        disabled: PropTypes.bool,
        hoverColor: PropTypes.string,
        label: validateLabel,
        labelClassName: PropTypes.string,
        labelPosition: PropTypes.oneOf(['before', 'after']),
        primary:    PropTypes.bool,
        secondary: PropTypes.bool
    };

    static defaultProps = {
        labelPosition: 'before'
    };

    constructor(...args) {
        super(...args);
        this._handleTouchStart = this._handleTouchStart.bind(this);
        this._handleTouchEnd = this._handleTouchEnd.bind(this);
        this._handleMouseDown = this._handleMouseDown.bind(this);
        this._handleMouseUp = this._handleMouseUp.bind(this);
    }

    _handleTouchStart(event) {
        return (event.nativeEvent && event.nativeEvent.targetTouches) ?
            this.addAnimatedTouchPoint(event.nativeEvent.targetTouches[0]) : null;

    }

    _handleTouchEnd(event) {
        return (event.nativeEvent && event.nativeEvent.targetTouches) ?
            this.removeAnimatedTouchPoint() : null;
    }

    _handleMouseDown(event) {
        return (!this.hasTouchEvents() && event.nativeEvent) ?
            this.addAnimatedTouchPoint(event.nativeEvent) : null;
    }

    _handleMouseUp(event) {
        return (!this.hasTouchEvents() && event.nativeEvent) ?
            this.removeAnimatedTouchPoint() : null;

    }

    renderLabel(label, className) {
        return (label ? <RaisedButtonLabel className={ className } label={ label } /> : null );
    }

    render() {
        const {
            children,
            disabled,
            label,
            labelClassName,
            labelPosition,
            ...others
            } = this.props;

        const buttonLabel = this.renderLabel(label, labelClassName, children);

        return (
            <button onTouchStart={ this._handleTouchStart }
                    onTouchEnd={ this._handleTouchEnd }
                    onMouseDown={ this._handleMouseDown }
                    onMouseUp={ this._handleMouseUp }
                    disabled={ disabled }
                    ref='elementTouch'
                    className={ this.getClasses('raised-button', this.props) }
                    { ...others } >
                <span className='raised-button-tap' ref='elementTouchTap' />
                { labelPosition === 'before'?
                    [ buttonLabel, children ]:
                    [ children, buttonLabel ] }
            </button>
        );
    }
}

export default RaisedButton;
