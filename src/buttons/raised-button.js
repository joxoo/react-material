import React from 'react';
import PropTypes from 'prop-types';
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
        className: PropTypes.string,
        labelPosition: PropTypes.oneOf(['before', 'after']),
        primary:    PropTypes.bool,
        secondary: PropTypes.bool
    };

    static defaultProps = {
        labelPosition: 'before'
    };

    constructor(...args) {
        super(...args);
        this._handleAnmation = this._handleAnmation.bind(this);

        this.setTouchReference = this.setTouchReference.bind(this);
        this.setTouchTapReference = this.setTouchTapReference.bind(this);
    }

    renderLabel(label, className) {
        return (label ? <RaisedButtonLabel key={ label } className={ className } label={ label } /> : null );
    }

    render() {
        const {
            children,
            disabled,
            label,
            labelClassName,
            className,
            secondary,
            primary,
            labelPosition,
            ...others
        } = this.props;

        const buttonLabel = this.renderLabel(label, labelClassName, children);
        const childs = labelPosition === 'before' ? [ buttonLabel, children ] : [ children, buttonLabel ];

        return (
            <button
                { ...others }
                onTouchStart={ this._handleAnmation }
                onMouseDown={ this._handleAnmation }
                disabled={ disabled }
                className={ this.getClasses('raised-button', { className, secondary, primary }) }
                ref={ this.setTouchReference }
            >
                <span className='raised-button-tap'  ref={ this.setTouchTapReference }/>
                { childs }
            </button>
        );
    }
}

export default RaisedButton;
