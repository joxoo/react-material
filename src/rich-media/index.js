import React from 'react';
import PropTypes from 'prop-types';
import { MaterialPropTypes } from  '../addons';
import { getClassesStatic  } from  '../addons/get-classes';
import Audio from './audio';
import Video from './video';
import Picture from './picture';

const getWithMimeType = (type, value) => value.type.split('/').shift().toLowerCase() === type;
const getTypeFromSources = (sources, type) => sources.filter(getWithMimeType.bind(null, type));

const RichMedia = (props) => {
    const { sources, ...others } = props;
    const audioSources = getTypeFromSources(sources, 'audio');
    const videoSources = getTypeFromSources(sources, 'video');
    const pictureSources = getTypeFromSources(sources, 'image');

    return (
        <div className={ getClassesStatic('rich-media', others) }>
            { audioSources.length > 0 &&
                <Audio className='rich-media-audio' sources={ audioSources } {...others} /> }
            { videoSources.length > 0 &&
                <Video className='rich-media-video' sources={ videoSources } {...others} /> }
            { pictureSources.length > 0 &&
                <Picture className='rich-media-picture' sources={ pictureSources } {...others} /> }
        </div>
    );
};

RichMedia.propTypes = {
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

export { Picture, Audio, Video };
export default RichMedia;
