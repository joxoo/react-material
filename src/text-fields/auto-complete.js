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
        name: PropTypes.string,
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

        this.state = { defaultValue: this.props.value };
        this.handleOnInput = this.handleOnInput.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleClear(event) {
        event.preventDefault();

        this.state = { defaultValue: '' };
        this.autoCompleteInput.value = '';
        this.autoCompleteInput.focus();
    }

    handleOnInput(event) {
        const defaultValue = this.autoCompleteInput.value;
        this.props.onInput(defaultValue, event);
        this.setState({ defaultValue });
    }

    renderData(data) {
        return (
            <List className='auto-complete-results' items={ data }/>
        );
    }

    render() {
        const { placeholder, data, children, name, onClose, ...others } = this.props;

        const autoComplete = () => {
            return (
                <div className={ this.getClasses('auto-complete', others ) }>
                    <div className='auto-complete-search'>
                        <IconButton className='auto-complete-icon-left'
                                    icon='0xE5C$' onClick={ onClose }/>
                        <div className='auto-complete-input'>
                            <input type='search' ref={ (ref) => this.autoCompleteInput = ref }
                                   defaultValue={ this.state.defaultValue }
                                   placeholder={ placeholder }
                                   name={ name }
                                   autoComplete='off'
                                   onChange={ this.handleOnInput } autoFocus />
                        </div>
                        <IconButton className='auto-complete-icon-right'
                                    icon='0xE5CD' onClick={ this.handleClear }/>
                    </div>
                    { data.length > 0 && this.renderData(data) }
                    { children && <div className='auto-complete-results'>{ children }</div> }
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
