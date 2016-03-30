import React, { PropTypes } from 'react';
import { getClasses } from  '../addons';

@getClasses

class ProgressLinear extends React.Component {

    static propTypes = {
        type: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'determinate-indeterminate'])
    };

    static defaultProps = {
        type: 'indeterminate'
    };

    render() {
        const { type } = this.props;

        return (
            <div className={ this.getClasses('progress-linear', { [type]: true }) }>
                <div className='progress-bar' />
            </div>
        );
    }
}

export default ProgressLinear;
