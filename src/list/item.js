import React, { PropTypes } from 'react';
import { getClasses, touchPoint, hasTouchEvents } from  '../addons';
import FontIcon from '../font-icon';

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
        touchable: PropTypes.bool
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
        const { title, icon, touchable, subtitle, children, ...others } = this.props;
        const fontIcon = typeof icon === 'string' ? { icon } : icon;
        const handleOnClick = others.onClick;

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
            <li className={ this.getClasses('list-item', others) } { ...others } >
                { fontIcon && <FontIcon className='list-item-icon' {...fontIcon} /> }
                <div className='list-item-content'>
                    { title && <span className='list-item-title'>{ title }</span> }
                    { subtitle && <span className='list-item-subtitle'>{ subtitle }</span> }
                    { children }
                </div>
                { touchable && <span className='list-item-tap' ref={ this.setTouchTapReference } /> }
            </li>
        );
    }
}

export default ListItem;
