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
        this._handleAnmation = this._handleAnmation.bind(this);

        this.setTouchReference = this.setTouchReference.bind(this);
        this.setTouchTapReference = this.setTouchTapReference.bind(this);
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
            <button { ...others } onTouchStart={ this._handleAnmation }
                    onMouseDown={ this._handleAnmation }
                    disabled={ disabled }
                    className={ this.getClasses('raised-button', this.props) }
                    ref={ this.setTouchReference } >
                <span className='raised-button-tap'  ref={ this.setTouchTapReference }/>
                { labelPosition === 'before'?
                    [ buttonLabel, children ]:
                    [ children, buttonLabel ] }
            </button>
        );
    }
}

export default RaisedButton;
