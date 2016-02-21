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
        this._handleAnmation = this._handleAnmation.bind(this);
        this.setTouchReference = this.setTouchReference.bind(this);
        this.setTouchTapReference = this.setTouchTapReference.bind(this);
    }

    renderFontIcon( props ) {
        if (props.iconElement) {
            return props.iconElement;
        }
        return props.icon ?
            <FontIcon className={ props.iconClassName } disabled={ props.disabled } icon={ props.icon } /> : null;
    }

    render() {
        const {
            disabled,
            className,
            size,
            ...others
            } = this.props;

        return (
            <button onTouchStart={ this._handleAnmation }
                    onMouseDown={ this._handleAnmation }
                    disabled={ disabled }
                    className={ this.getClasses('floating-action-button', { className, size }) }
                    ref={ this.setTouchReference }
                    { ...others } >
                <span className='floating-action-button-tap' ref={ this.setTouchTapReference }/>
                { this.renderFontIcon(this.props) }

            </button>
        );
    }
}

export default FloatingActionButton;
