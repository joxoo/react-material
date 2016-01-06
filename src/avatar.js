import React, { PropTypes } from 'react';
import { getClasses } from './addons';
import FontIcon from './font-icon';

@getClasses

class Avatar extends React.Component {

    static propTypes = {
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

    render() {
        const {
            icon,
            image,
            letter,
            ...others
        } = this.props;

        const isImage = Boolean(image);
        const isIcon = !image && Boolean(icon);
        const isLetter = !image && !icon && Boolean(letter);


        return (
            <div className={ this.getClasses('avatar', others ) }>
                { isImage && <img src={ image } className='avatar-image'/> }
                { isIcon && <FontIcon className='avatar-icon' { ...icon } /> }
                { isLetter &&
                    <span className={ this.getClasses('avatar-letter', letter) } >
                        { letter.character.toUpperCase() }
                    </span> }
            </div>
        );
    }

}

export default Avatar;
