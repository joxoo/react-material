import React from 'react';
import PropTypes from 'prop-types';
import { getClassesStatic } from  './addons/get-classes';
import FontIcon from './font-icon';
import Avatar from './avatar';

const Chip = (props) => {
    const { icon, avatar, label, onClose, ...others } = props;
    return (
        <div {...others} className={ getClassesStatic('chip', others) }>
            { icon && !avatar && <FontIcon {...icon} className='chip-icon' /> }
            { avatar && <Avatar {...avatar} /> }
            <span className='chip-label'>{ label }</span>
            { onClose && <FontIcon onClick={ onClose } className='chip-close' icon='0xE5C9' /> }
        </div>
    );
};

Chip.propTypes = {
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

export default Chip;
