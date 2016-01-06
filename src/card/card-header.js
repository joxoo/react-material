import React, { PropTypes } from 'react';
import Avatar from '../avatar';
import { getClasses } from  '../addons';

@getClasses

class CardHeader extends React.Component {

    static propTypes = {
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

    static defaultProps = {
        level: 2
    };

    render() {
        const {
            avatar,
            title,
            subtitle,
            level,
            ...others
        } = this.props;
        const ComponentTag = `h${level}`;

        return (
            <div className={ this.getClasses('card-header', others) }>
                { avatar && <Avatar { ...avatar } className='card-header-avatar' /> }
                <div className='card-header-text'>
                    <ComponentTag className='card-header-title'>{ title }</ComponentTag>
                    { subtitle && <span className='card-header-subtitle'>{ subtitle }</span> }
                </div>
            </div>
        );
    }
}

export default CardHeader;
