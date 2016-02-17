import React from 'react';

class DialogWrapper extends React.Component {
    render() {
        return (<div className='dialog-wrapper'>{ this.props.children }</div>);
    }
}

export default DialogWrapper;
