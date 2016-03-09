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
                sizes: PropTypes.string,
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
            alt: sources[0].alt
        };

        return (
            <picture className={ this.getClasses('picture', others) }>
                { sources.map((props, key) => {
                    const { src, type, media, sizes } = props;
                    return <source key={ key } { ...{media, sizes, type} } srcSet={ src }/>;
                }) }
                { fallback && <img {...fallback} {...others} /> }
            </picture>
        );
    }
}

export default Picture;
