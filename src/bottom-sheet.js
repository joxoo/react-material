import React, { PropTypes } from 'react';
import { getClassesStatic } from './addons/get-classes';

const BottomSheet = (props) => {
    const { modal, children, ...others } = props;
    return (
        <div { ...others } className={ getClassesStatic('bottom-sheet', { ...others }) }>
            { modal && <div className='bottom-sheet-layer' /> }
            <div className='bottom-sheet-content'>{ children }</div>
        </div>
    );
};

BottomSheet.propTypes = {
    modal: PropTypes.bool
};

BottomSheet.defaultProps = {
    modal: false
};

export default BottomSheet;
