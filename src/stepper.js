import React, {PropTypes} from 'react';
import Avatar from './avatar';
import FlatButton from './buttons/flat-button';
import { getClassesStatic } from './addons/get-classes';

class Stepper extends React.Component {
    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.element),
        stepLabels: PropTypes.arrayOf(PropTypes.string),
        continueLabel: PropTypes.string,
        cancelLabel: PropTypes.string
    };

    constructor(...args) {
        super(...args);
        this.state = { openStep: 0, stepProps: [] };
        this.submitStep = this.submitStep.bind(this);
    }

    submitStep(key, props, event) {
        event.preventDefault();
        event.stopPropagation();
        const nextStep = key + 1;
        const nextState = { openStep: nextStep, stepProps: this.state.stepProps };
        let valid = true;

        if (typeof props.validate === 'function') {
            valid = props.validate(event);
        }

        if (valid && typeof props.prepareNextStepProps === 'function') {
            nextState.stepProps[key] = props.prepareNextStepProps(event) || {};
        }

        if (valid) {
            this.setState(nextState);
        }


    }

    render() {
        const { stepLabels, children, continueLabel, cancelLabel, ...others } = this.props;
        const openStep = this.state.openStep;

        return (
            <div {...others} className={ getClassesStatic('stepper', others) }>
                { children.map((child, key) => {
                    const component = React.cloneElement(child, { stepProps: this.state.stepProps } );
                    const avatar = key < openStep ? { icon: { icon: '0xE5CA' } } :
                        { letter : { character: String(key + 1) } };
                    return (
                        <form key={ key } onSubmit={ this.submitStep.bind(null, key, child.props) }
                            className={ getClassesStatic('stepper-step', { open: openStep === key }) } >
                            <div className='stepper-step-label'>
                                <Avatar {...avatar}/>
                                { stepLabels[key] && <span className='stepper-step-title'>{ stepLabels[key] }</span> }
                            </div>
                            <div className='stepper-step-content'>
                                { component }
                                <div className='stepper-step-actions'>
                                    <FlatButton label={ continueLabel } primary={ true }/>
                                    <FlatButton label={ cancelLabel } />
                                </div>
                            </div>
                        </form>
                    );
                }) }
            </div>
        );
    }
}

export default Stepper;
