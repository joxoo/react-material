import React, { PropTypes } from 'react';
import { getClasses } from  './addons';

@getClasses

class Header extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        level: PropTypes.number
    };

    static defaultProps = {
        level: 1
    };

    render() {
        const {
            title,
            subtitle,
            level,
            ...others
        } = this.props;
        const ComponentTag = `h${level}`;

        return (
            <div className={ this.getClasses('header', others) }>
                <div className='header-text'>
                    <ComponentTag className='header-title'>{ title }</ComponentTag>
                    { subtitle && <span className='header-subtitle'> { subtitle } </span> }
                </div>
            </div>
        );
    }
}

export default Header;
