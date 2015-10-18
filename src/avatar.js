import React, { PropTypes } from 'react';
import { getClasses } from './addons';

@getClasses

class Avatar extends React.Component {

    static propTypes = {
        background: PropTypes.string,
        icon: PropTypes.element,
        src: PropTypes.string
    };

    renderImage(props) {
        return ( <img src={ props.src } className={ `avatar ${props.className? props.className: ''}` } />);
    }

    renderIcon(icon) {
        if (!icon) {
            return null;
        }
        const iconElement = React.cloneElement(icon, {
            className: this.getClasses('avatar-icon', icon.props)
        });

        return iconElement;
    }

    render() {
        const props = this.props;

        if( props.src ) {
            return ( this.renderImage(this.props) );
        }

        return (
            <div className={ this.getClasses('avatar', this.props ) }>
                { this.renderIcon(props.icon) }
                { this.props.children }
            </div>
        );
    }

}

export default Avatar;
