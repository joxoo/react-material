import React, { PropTypes } from 'react';
import Avatar from '../avatar';
import { getClasses } from  '../addons';

@getClasses

class CardHeader extends React.Component {

    static propTypes = {
        avatar: PropTypes.shape({
            background: PropTypes.string,
            icon: PropTypes.element,
            src: PropTypes.string
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
