import React, { PropTypes } from 'react';
import { getClasses } from '../addons';
import IconButton from '../buttons/icon-button';
import DialogOverlay from '../dialog/overlay';
import DialogWrapper from '../dialog/wrapper';
import List from '../list';

@getClasses

class AutoComplete extends React.Component {

    static propTypes = {
        placeholder: PropTypes.string,
        value: PropTypes.string,
        data: PropTypes.array,
        inset: PropTypes.bool,
        onInput: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired
    };

    static defaultProps = {
        data: [],
        inset: false
    };

    constructor(...args) {
        super(...args);
        this.state = { value: this.props.value };
    }

    handleClear() {
        this.setState({ value: '' });
        this.autoCompleteInput.focus();
    }

    handleClose() {
        this.props.onClose();
    }

    handleOnInput() {
        const value = this.autoCompleteInput.value;
        this.props.onInput(value);
        this.setState({ value });
    }

    renderData(data) {
        return (
            <List className='auto-complete-results' items={ data }/>
        );
    }

    render() {
        const {
            placeholder,
            data,
            ...others
        } = this.props;

        const autoComplete = () => {
            return (
                <div className={ this.getClasses('auto-complete', others ) }>
                    <IconButton className='auto-complete-icon-left'
                                icon='arrow_back' onClick={ this.handleClose.bind(this) }/>
                    <div className='auto-complete-input'>
                        <input type='search' ref={ (ref) => this.autoCompleteInput = ref } value={ this.state.value }
                               placeholder={ placeholder } onInput={ this.handleOnInput.bind(this) } autoFocus />
                    </div>
                    <IconButton className='auto-complete-icon-right'
                                icon='close' onClick={ this.handleClear.bind(this) }/>
                    { data.length > 0 && this.renderData(data) }
                </div>
            );
        };

        return others.inset ? autoComplete() : (
            <DialogWrapper>
                { autoComplete() }
                <DialogOverlay />
            </DialogWrapper>
        );
    }

}

export default AutoComplete;
