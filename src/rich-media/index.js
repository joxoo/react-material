import React, { PropTypes } from 'react';
import { getClasses, MaterialPropTypes } from  '../addons';
import Audio from './audio';
import Video from './video';
import Image from './image';

const richMediaTypes = [ 'audio', 'video', 'image' ];

@getClasses

class RichMedia extends React.Component {

    static propTypes = {
        url : MaterialPropTypes.url.isRequired,
        contentType: PropTypes.string.isRequired
    };

    static getMediaTypeFromMimeType(contentType) {
        const type = contentType.split('/').shift();

        if (richMediaTypes.indexOf(type.toLowerCase()) !== -1) {
            return type;
        }
        return null;
    }

    renderMedia(mediaType, props) {
        switch (mediaType) {
        case 'audio':
            return ( <Audio {...props} className='rich-media-audio'/> );
        case 'video':
            return ( <Video {...props} className='rich-media-video'/> );
        case 'image':
            return ( <Image {...props} className='rich-media-image'/> );
        }
    }

    render() {
        const props = this.props;
        const mediaType = RichMedia.getMediaTypeFromMimeType(props.contentType);

        return (
            <div className={ this.getClasses('rich-media', this.props) }>
                { mediaType && this.renderMedia(mediaType, props) }
            </div>
        );
    }
}

export default {
    RichMedia,
    Image,
    Audio,
    Video
};
