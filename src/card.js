import React from 'react';
import { getClasses } from  './addons';

@getClasses

class Card extends React.Component {

    render() {
        return (
            <div className={ this.getClasses('card', this.props) }>
                { this.props.children }
            </div>
        );
    }
}

export default Card;
