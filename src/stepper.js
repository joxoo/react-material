import React, {PropTypes} from 'react';
import { getClassesStatic } from './addons/get-classes';

class Stepper extends React.Component {
    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.element),
        continueLabel: PropTypes.string,
        cancelLabel: PropTypes.string,
        onStep: PropTypes.func.isRequired,
        cancelStep: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = { openStep: 0, stepCount : props.children.length };
        this.handleStep = this.handleStep.bind(this);
    }

    handleStep(type, props, event) {
        const { openStep, stepCount } = this.state;

        if (type === 'open') {
            if (props.stepNumber < openStep) {
                return this.setState({ openStep: props.stepNumber });
            }
            return;
        }

        if (type === 'submit') {
            if (openStep < stepCount) {
                this.setState({ openStep: openStep + 1 });
            }

            return this.props.onStep(props, event);
        }

        return this.props.cancelStep(props, event);
    }

    render() {
        const { children, continueLabel, cancelLabel, ...others } = this.props;
        const openStep = this.state.openStep;

        return (
            <div {...others} className={ getClassesStatic('stepper', others) }>
                { children.map((child, key) => {
                    const avatar = key < openStep ? { icon: { icon: '0xE5CA' } } :
                        { letter : { character: String(key + 1) } };

                    return React.cloneElement(child,
                        {
                            stepProps: this.state.stepProps,
                            avatar,
                            continueLabel,
                            cancelLabel,
                            handleStep: this.handleStep,
                            open: openStep === key,
                            stepNumber: key
                        });

                }) }
            </div>
        );
    }
}

export default Stepper;
