import React, { PropTypes } from 'react';
import { getClasses, MaterialPropTypes } from  '../addons';

@getClasses

class Video extends React.Component {

    static propTypes = {
        sources : PropTypes.arrayOf(
            PropTypes.shape({
                src: MaterialPropTypes.url.isRequired,
                type: PropTypes.string.isRequired,
                title: PropTypes.string
            })
        ).isRequired,
        controls: PropTypes.bool,
        autoplay: PropTypes.bool,
        poster: MaterialPropTypes.url
    };

    static defaultProps = {
        autoplay: false,
        controls: true
    };

    render() {
        const {
            autoplay,
            controls,
            sources,
            poster,
            ...others
        } = this.props;

        const options = {
            autoplay,
            controls,
            poster
        };

        return (
            <video { ...options } className={ this.getClasses('video', others) }>
                { sources.map((source, key) => (<source key={ key } {...source}/>)) }
            </video>
        );
    }
}

export default Video;
