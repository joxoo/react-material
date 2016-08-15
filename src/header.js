import React, { PropTypes } from 'react';
import { getClassesStatic } from  './addons/get-classes';

const Header = (props) => {
    const {level, title, subtitle, ...rest} = props;
    const ComponentTag = `h${level}`;

    return (
        <div {...rest} className={ getClassesStatic('header', rest) }>
            <div className='header-text'>
                <ComponentTag className='header-title'>{ title }</ComponentTag>
                { subtitle && <span className='header-subtitle'> { subtitle } </span> }
            </div>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    level: PropTypes.number
};

Header.defaultProps = {
    level: 1
};

export default Header;
