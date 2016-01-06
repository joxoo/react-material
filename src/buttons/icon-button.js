import React, { PropTypes } from 'react';
import {getClasses, touchPoint, hasTouchEvents} from '../addons';
import FontIcon from '../font-icon';

@hasTouchEvents
@touchPoint
@getClasses

class IconButton extends React.Component {

    static  propTypes= {
        className: PropTypes.string,
        disabled: PropTypes.bool,
        icon: PropTypes.string,
        iconClassName: PropTypes.string,
        iconElement: PropTypes.element
    };

    static defaultProps = {
        tooltipPosition: 'bottom-center'
    };

    constructor(...args) {
        super(...args);
        this._handleTouchEnd = this._handleTouchEnd.bind(this);
        this._handleMouseUp = this._handleMouseUp.bind(this);
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
            ...others
            } = this.props;

        return (
            <button onTouchEnd={ this._handleTouchEnd }
                    onMouseUp={ this._handleMouseUp }
                    disabled={ disabled }
                    className={ this.getClasses('icon-button', { className: className }) }
                    ref={ this.setTouchReference }
                    { ...others } >
                <span className='icon-button-tap' ref={ this.setTouchTapReference } />
                { this.renderFontIcon(this.props) }
            </button>
        );
    }
}

export default IconButton;
