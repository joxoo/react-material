import React, { PropTypes } from 'react';
import { getClasses, MaterialPropTypes } from  './addons';
import { RichMedia } from './rich-media/index.js';

@getClasses

class Card extends React.Component {

    static propTypes = {
        richMedia: PropTypes.shape({
            uri: MaterialPropTypes.url.isRequired,
            mediaType: PropTypes.string.isRequired
        })
    };

    renderRichMedia(props) {
        return (
            <RichMedia {...props} className='card-rich-media'/>
        );
    }

    render() {
        const {
            richMedia
        } = this.props;

        return (
            <div className={ this.getClasses('card', this.props) }>
                { richMedia && this.renderRichMedia(richMedia) }
            </div>
        );
    }
}

export default Card;
