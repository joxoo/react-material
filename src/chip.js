import React, { PropTypes } from 'react';
import { getClasses } from  './addons';
import FontIcon from './font-icon';
import Avatar from './avatar';

@getClasses

class Chip extends React.Component {

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.shape({
            background: PropTypes.string,
            color: PropTypes.string,
            icon: PropTypes.string
        }),
        avatar: PropTypes.oneOfType([ PropTypes.shape({
            image: PropTypes.string
        }), PropTypes.shape({
            letter:PropTypes.shape({
                background: PropTypes.string,
                color: PropTypes.string,
                character: PropTypes.string.isRequired
            })
        }) ]),
        onClose: PropTypes.func,
        onClick: PropTypes.func
    };

    render() {
        const { icon, avatar, label, onClose, ...others } = this.props;
        return (
            <div {...others} className={ this.getClasses('chip', others) }>
                { icon && !avatar && <FontIcon {...icon} className='chip-icon' /> }
                { avatar && <Avatar {...avatar} /> }
                <span className='chip-label'>{ label }</span>
                { onClose && <FontIcon onClick={ onClose } className='chip-close' icon='cancel' /> }
            </div>
        );
    }
}

export default Chip;
