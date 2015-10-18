import React, { PropTypes } from 'react';
import Avatar from '../avatar';

class CardHeader extends React.Component {

    static propTypes = {
        avatar: PropTypes.element,
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string
    };

    renderAvatar( avatar ) {
        if ( React.isValidElement(avatar) ) {
            return React.cloneElement(avatar, {
                className: `card-header-avatar ${avatar.className ? avatar.className : ''}`
            });
        }
        return ( <Avatar src={ avatar } className='card-header-avatar' /> );
    }

    render() {
        return (
            <div className='card-header'>
                { this.renderAvatar(this.props.avatar) }
                <div className='card-header-text'>
                    <span className='card-header-title'>{ this.props.title }</span>
                    <span className='card-header-subtitle'>{ this.props.subtitle }</span>
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default CardHeader;
