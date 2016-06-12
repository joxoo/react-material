import React, { PropTypes } from 'react';
import { getClassesStatic } from  './addons/get-classes';

const Header = (props) => {
    const ComponentTag = `h${props.level}`;

    return (
        <div {...props} className={ getClassesStatic('header', props) }>
            <div className='header-text'>
                <ComponentTag className='header-title'>{ props.title }</ComponentTag>
                { props.subtitle && <span className='header-subtitle'> { props.subtitle } </span> }
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
