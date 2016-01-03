import React, { PropTypes } from 'react';
import { getClasses, MaterialPropTypes } from  '../addons';
import Audio from './audio';
import Video from './video';
import Picture from './picture';

@getClasses

class RichMedia extends React.Component {

    static propTypes = {
        sources: PropTypes.arrayOf(PropTypes.shape({
            src: MaterialPropTypes.url.isRequired,
            type: PropTypes.string.isRequired,
            title: PropTypes.string,
            alt: PropTypes.string,
            media: PropTypes.string
        })),
        controls: PropTypes.bool,
        autoplay: PropTypes.bool
    };

    static getWithMimeType(value) {
        const type = value.type.split('/').shift();

        return type.toLowerCase() === this.type;
    }

    static getTypeFromSources(sources, type) {
        return sources.filter(RichMedia.getWithMimeType.bind({ type }))
    }

    render() {
        const {
            sources,
            ...others
        } = this.props;
        const audioSources = RichMedia.getTypeFromSources(sources, 'audio');
        const videoSources = RichMedia.getTypeFromSources(sources, 'video');
        const pictureSources = RichMedia.getTypeFromSources(sources, 'image');

        return (
            <div className={ this.getClasses('rich-media', others) }>
                {audioSources.length > 0 && <Audio sources={ audioSources } {...others} />}
                {videoSources.length > 0 && <Video sources={ videoSources } {...others} />}
                {pictureSources.length > 0 && <Picture sources={ pictureSources } {...others} />}
            </div>
        );
    }
}

export { Picture, Audio, Video };
export default RichMedia;
