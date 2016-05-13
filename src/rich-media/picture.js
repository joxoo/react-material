import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { getClasses, MaterialPropTypes } from  '../addons';

const findMediaIndex = (sources, width) => {
    const index = sources.reverse().findIndex((source) => {
        const matches = source.media.match(/^\(([a-z\-]+): ([0-9]+)([a-z]+)\)$/);
        if(!matches) {
            return false;
        }
        const media = matches[1];
        const unit = matches[3];
        const sourceWidth = unit === 'rem' ? matches[2] * 16 : matches[2];
        if (media === 'min-width' && sourceWidth > width) {
            return true;
        } else if (media === 'max-width' && sourceWidth < width) {
            return true;
        }
        return false;
    });

    return index !== -1 ? (sources.length - 1) - index : -1;
};

@getClasses


class PictureElement extends React.Component {

    static propTypes = {
        sources : PropTypes.arrayOf(
            PropTypes.shape({
                src: MaterialPropTypes.url.isRequired,
                type: PropTypes.string.isRequired,
                alt: PropTypes.string,
                media: PropTypes.string,
                sizes: PropTypes.string,
                title: PropTypes.string
            })
        ).isRequired
    };

    constructor(...args) {
        super(...args);

        this.state = { index: 0 };
    }
    componentDidMount() {
        if (!Boolean(window.HTMLPictureElement)) {
            const picture = ReactDOM.findDOMNode(this).getElementsByTagName('img')[0];
            const sources = this.props.sources;
            const width = picture.width;
            const index = findMediaIndex(sources, width);
            if (index !== -1) {
                this.setState({ index });
            }
        }
    }

    render() {
        const { sources, ...others } = this.props;
        const index = this.state.index;
        const fallback = { src: sources[index].src, alt: sources[index].alt };

        return (
            <picture className={ this.getClasses('picture', others) }>
                { sources.map((props, key) => {
                    const { src, type, media, sizes } = props;
                    return <source key={ key } { ...{media, sizes, type} } srcSet={ src }/>;
                }) }
                { fallback && <img  {...fallback} {...others} /> }
            </picture>
        );
    }
}

export default PictureElement;
