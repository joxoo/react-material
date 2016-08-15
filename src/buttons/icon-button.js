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
        color: PropTypes.string,
        iconElement: PropTypes.element
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
            <FontIcon { ...props } /> : null;
    }

    render() {
        const {
            disabled,
            className,
            icon,
            iconElement,
            color,
            ...others
            } = this.props;

        return (
            <button {...others} onTouchStart={ this._handleAnmation }
                    onMouseDown={ this._handleAnmation }
                    disabled={ disabled }
                    className={ this.getClasses('icon-button', { className: className }) }
                    ref={ this.setTouchReference } >
                <span className='icon-button-tap' ref={ this.setTouchTapReference } />
                { this.renderFontIcon({ color, icon, iconElement }) }
            </button>
        );
    }
}

export default IconButton;
