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
        const fallback = sources[0];


        return (
            <picture className={ this.getClasses('picture', others) }>
                { sources.map((source, key) => (<source key={ key } {...source}/>)) }
                { fallback && <img {...fallback} /> }
            </picture>
        );
    }
}

export default Picture;
