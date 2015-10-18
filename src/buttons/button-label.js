import React, { PropTypes } from 'react';
import {getClasses} from '../addons';

@getClasses

class FlatButtonLabel extends React.Component {

    static propTypes = {
        label: PropTypes.string
    };

    render() {
        return (
            <span className={ this.getClasses('flat-button-label', this.props) }>{ this.props.label }</span>
        );
    }
}

export default FlatButtonLabel;
