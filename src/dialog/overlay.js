import React from 'react';

class DialogOverlay extends React.Component {
    render() {
        return (<div className='dialog-overlay'>{ this.props.children }</div>);
    }
}

export default DialogOverlay;
