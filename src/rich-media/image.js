import React, { PropTypes } from 'react';
import { getClasses, MaterialPropTypes } from  '../addons';

@getClasses

class Image extends React.Component {

    static propTypes = {
        url : MaterialPropTypes.url.isRequired,
        mimeType: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string
    };

    render() {
        const {
            url,
            mimeType,
            alt,
            title,
            ...others
            } = this.props;

        return (
            <img alt={ alt }
                 title={ title }
                 className={ this.getClasses('image', others) }
                 src={ url } type={ mimeType } />
        );
    }
}

export default Image;
