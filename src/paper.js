import React, { PropTypes } from 'react';
import { getClasses } from  './addons';

@getClasses

class Paper extends React.Component {

    static propTypes = {
        circle: PropTypes.bool,
        rounded: PropTypes.bool,
        transition: PropTypes.bool,
        depth: PropTypes.number
    };

    static defaultProps = {
        circle: false,
        rounded: true,
        transition: true,
        depth: 1
    };


    render() {
        const props = this.props;

        return (
            <div className={ this.getClasses('paper', this.props) }>{ props.children }</div>
        );
    }
}

export default Paper;
