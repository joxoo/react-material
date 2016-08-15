import React, { PropTypes } from 'react';
import { getClasses, touchPoint, hasTouchEvents } from  '../addons';
import FontIcon from '../font-icon';
import Avatar from '../avatar';

@getClasses
@hasTouchEvents
@touchPoint

class ListItem extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        subtitle: PropTypes.string,
        icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.shape({
            background: PropTypes.string,
            color: PropTypes.string,
            icon: PropTypes.string
        }) ]),
        avatar: PropTypes.oneOfType([ PropTypes.shape({
            image: PropTypes.string
        }), PropTypes.shape({
            letter:PropTypes.shape({
                background: PropTypes.string,
                color: PropTypes.string,
                character: PropTypes.string.isRequired
            })
        }) ]),
        touchable: PropTypes.bool,
        iconAfter: PropTypes.bool,
        avatarAfter: PropTypes.bool
    };

    constructor(props, context) {
        super(props, context);
        if (props.touchable) {
            this.touchable();
        }
    }

    touchable() {
        this._handleAnmation = this._handleAnmation.bind(this);

        this.setTouchReference = this.setTouchReference.bind(this);
        this.setTouchTapReference = this.setTouchTapReference.bind(this);
    }

    render() {
        const { title, icon, subtitle, children, avatar, iconAfter, avatarAfter, touchable, ...others } = this.props;
        const fontIcon = typeof icon === 'string' ? { icon } : icon;
        const handleOnClick = others.onClick;
        const iconBefore = fontIcon && !iconAfter;
        const avatarBefore = avatar && !avatarAfter && iconBefore;

        if (touchable) {
            Object.assign(others, {
                ref: this.setTouchReference,
                onClick: (...args) => {
                    this._handleAnmation(...args);
                    if (handleOnClick) {
                        handleOnClick(...args);
                    }
                }
            });
        }

        return (
            <li { ...others } className={ this.getClasses('list-item', others) } >
                { iconBefore && <FontIcon className='list-item-icon' {...fontIcon} /> }
                { avatarBefore && <Avatar className='list-item-avatar' {...avatar} /> }
                <div className='list-item-content'>
                    { title && <strong className='list-item-title'>{ title }</strong> }
                    { subtitle && <span className='list-item-subtitle'>{ subtitle }</span> }
                    { children }
                </div>
                { !iconBefore && fontIcon && <FontIcon className='list-item-icon' {...fontIcon} /> }
                { !avatarBefore && avatar && <Avatar className='list-item-avatar-after' {...avatar} /> }
                { others.touchable && <span className='list-item-tap' ref={ this.setTouchTapReference } /> }
            </li>
        );
    }
}

export default ListItem;
