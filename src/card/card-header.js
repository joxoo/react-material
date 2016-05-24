import React, { PropTypes } from 'react';
import Avatar from '../avatar';
import { getClassesStatic } from  '../addons/get-classes';

const CardHeader = (props) => {
    const {avatar, title, subtitle, level, children, ...others} = props;
    const ComponentTag = `h${level}`;
    const hasAvatar = Boolean(avatar);

    return (
        <div {...others} className={ getClassesStatic('card-header', others) }>
            { avatar && <Avatar { ...avatar } className='card-header-avatar'/> }
            <div className='card-header-text'>
                <ComponentTag className={ getClassesStatic('card-header-title', { avatar: hasAvatar}) }>
                    { title }
                </ComponentTag>
                { subtitle && <span className={ getClassesStatic('card-header-subtitle', { avatar: hasAvatar}) }>
                    { subtitle }</span> }
                { children }
            </div>
        </div>
    );
};

CardHeader.propTypes = {
    avatar: PropTypes.shape({
        icon: PropTypes.shape({
            color: PropTypes.string,
            icon: PropTypes.string.isRequired
        }),
        image: PropTypes.string,
        letter:PropTypes.shape({
            color: PropTypes.string,
            character: PropTypes.string.isRequired
        })
    }),
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    level: PropTypes.number
};

CardHeader.defaultProps = {
    level: 2
};

export default CardHeader;
