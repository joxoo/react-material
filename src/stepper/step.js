import React from 'react';
import PropTypes from 'prop-types';
import { getClassesStatic } from '../addons/get-classes';
import Avatar from '../avatar';
import FlatButton from '../buttons/flat-button';

class StepperStep extends React.PureComponent {
    static propTypes = {
        validate: PropTypes.func,
        handleStep: PropTypes.func,
        open: PropTypes.bool,
        label: PropTypes.string,
        continueLabel: PropTypes.string,
        cancelLabel: PropTypes.string,
        step: PropTypes.number,
        avatar: PropTypes.object
    };

    constructor(...args) {
        super(...args);
        this.submitStep = this.submitStep.bind(this);
        this.chancelStep = this.chancelStep.bind(this);
        this.openStep = this.openStep.bind(this);
    }

    chancelStep(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.handleStep('chancel', this.props);
    }

    openStep(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.props.open) {
            this.props.handleStep('open', this.props);
        }
    }

    submitStep(event) {
        let valid = true;
        const { validate, handleStep } = this.props;
        event.preventDefault();
        event.stopPropagation();


        if (typeof validate === 'function') {
            valid = validate(event);
        }
        if (valid) {
            handleStep('submit', this.props, event);
        }
    }

    render() {
        const { open, label, avatar, children, continueLabel, cancelLabel } = this.props;

        return (
            <form
                onSubmit={ this.submitStep }
                className={ getClassesStatic('stepper-step', { open }) }
            >
                <div className='stepper-step-label' onClick={ this.openStep }>
                    <Avatar {...avatar}/>
                    { label && <span className='stepper-step-title'>{ label }</span> }
                </div>
                <div className='stepper-step-content'>
                    { children }
                    <div className='stepper-step-actions'>
                        <FlatButton
                            label={ continueLabel }
                            primary={ true }
                        />
                        <FlatButton label={ cancelLabel } onClick={ this.chancelStep }/>
                    </div>
                </div>
            </form>
        );
    }
}


export default StepperStep;
