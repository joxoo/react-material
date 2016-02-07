import React, { PropTypes } from 'react';
import { getClasses, MaterialPropTypes } from  '../addons';

@getClasses

class Picture extends React.Component {

    static propTypes = {
        sources : PropTypes.arrayOf(
            PropTypes.shape({
                src: MaterialPropTypes.url.isRequired,
                type: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                media: PropTypes.string,
                title: PropTypes.string
            })
        ).isRequired
    };

    render() {
        const {
            sources,
            ...others
            } = this.props;
        const fallback = {
            src: sources[0].src,
            type: sources[0].type,
            alt: sources[0].alt
        };

        return (
            <picture className={ this.getClasses('picture', others) }>
                { sources.map((source, key) => (
                    <source key={ key } srcSet={ source.src } media={ source.media } type={ source.type } />)) }
                { fallback && <img {...fallback} {...others} /> }
            </picture>
        );
    }
}

export default Picture;
