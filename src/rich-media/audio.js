import React, { PropTypes } from 'react';
import { getClasses, MaterialPropTypes } from  '../addons';

@getClasses

class Audio extends React.Component {

    static propTypes = {
        url : MaterialPropTypes.url.isRequired,
        contentType: PropTypes.string.isRequired,
        controls: PropTypes.bool,
        autoPlay: PropTypes.bool
    };

    static defaultProps = {
        autoplay: false,
        controls: true
    };

    render() {
        const {
            autoPlay,
            controls,
            url,
            contentType,
            ...others
        } = this.props;

        return (
            <audio controls={ controls ? 'controls' : '' }
                   autoPlay={ autoPlay ? 'autoplay' : '' }
                   className={ this.getClasses('audio', others) }>
                <source src={ url } type={ contentType }/>
            </audio>
        );
    }
}

export default Audio;
