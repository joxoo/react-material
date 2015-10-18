import React, { PropTypes } from 'react';
import { getClasses, MaterialPropTypes } from  '../addons';

@getClasses

class Video extends React.Component {

    static propTypes = {
        url : MaterialPropTypes.url.isRequired,
        contentType: PropTypes.string.isRequired,
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
            url,
            poster,
            contentType,
            ...others
            } = this.props;

        return (
            <div className={ this.getClasses('video', others) }>
                <video poster={ poster ? poster : '' }>
                    <source src={ url } type={ contentType }/>
                </video>
                { controls && this.renderControls(others) }
            </div>
        );
    }
}

export default Video;
