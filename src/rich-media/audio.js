import React, { PropTypes } from 'react';
import { getClasses, MaterialPropTypes } from  '../addons';

@getClasses

class Audio extends React.Component {

    static propTypes = {
        sources : PropTypes.arrayOf(
            PropTypes.shape({
                src: MaterialPropTypes.url.isRequired,
                type: PropTypes.string.isRequired,
                title: PropTypes.string
            })
        ).isRequired,
        controls: PropTypes.bool,
        autoplay: PropTypes.bool
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
            ...others
        } = this.props;
        const options = {
            autoplay,
            controls
        };

        return (
            <audio {...options} className={ this.getClasses('audio', others) }>
                { sources.map( (source, key) => (<source key={ key } {...source}/>) ) }
            </audio>
        );
    }
}

export default Audio;
