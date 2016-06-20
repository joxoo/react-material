import React, { PropTypes } from 'react';
import { getClassesStatic } from './addons/get-classes';
import FontIcon from './font-icon';

const Avatar = (props) => {
    const { icon, image, letter, ...others } = props;
    const isImage = Boolean(image);
    const isIcon = !image && Boolean(icon);
    const isLetter = !image && !icon && Boolean(letter);


    return (
        <div className={ getClassesStatic('avatar', others ) }>
            { isImage && <img src={ image } className='avatar-image'/> }
            { isIcon && <FontIcon className='avatar-icon' { ...icon } /> }
            { isLetter &&
                <span className={ getClassesStatic('avatar-letter', letter) } >
                    { letter.character.toUpperCase() }
                </span> }
        </div>
    );
};

Avatar.propTypes = {
    icon: PropTypes.shape({
        color: PropTypes.string,
        icon: PropTypes.string.isRequired
    }),
    image: PropTypes.string,
    letter:PropTypes.shape({
        background: PropTypes.string,
        color: PropTypes.string,
        character: PropTypes.string.isRequired
    })
};

export default Avatar;
