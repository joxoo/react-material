import React from 'react';


function calculateTouchPoint(node, touche) {
    const rect = node.getBoundingClientRect();
    const touchPageX = touche.pageX;
    const touchPageY = touche.pageY;

    return {
        left: ((rect.left - touchPageX) * -1) - (rect.width / 2),
        top:  ((rect.top - touchPageY) * -1) - (rect.height / 2)
    };
}

function addAnimatedTouchPoint(touch) {
    const elementTouch = React.findDOMNode(this.refs.elementTouch);
    const elementTouchTap = React.findDOMNode(this.refs.elementTouchTap);
    const touchPoint = calculateTouchPoint(elementTouch, touch);

    elementTouchTap.style.left = touchPoint.left + 'px';

    setTimeout(() => {
        elementTouchTap.style.left = '';
    }, 250);
}

function removeAnimatedTouchPoint() {
    const elementTouch = React.findDOMNode(this.refs.elementTouch);

    setTimeout(() => {
        elementTouch.blur();
    }, 500);
}


/**
 * Makes the given component "calculateTouchPoint".
 *
 * @param object component Component.
 */
function getClassesDecorator(component) {
    component.prototype.addAnimatedTouchPoint = addAnimatedTouchPoint;
    component.prototype.removeAnimatedTouchPoint = removeAnimatedTouchPoint;
}

export default getClassesDecorator;
