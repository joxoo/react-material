function calculateTouchPoint(node, touche) {
    const rect = node.getBoundingClientRect();
    const touchPageX = touche.pageX;
    const touchPageY = touche.pageY;

    return {
        left: touchPageX - rect.left - 28,
        top:  touchPageY - rect.top - 28
    };
}

function setTouchReference(component) {
    this._touchReference = component;
}

function setTouchTapReference(component) {
    this._touchTapReference = component;
}

function addAnimatedTouchPoint(touch) {
    const elementTouch = this._touchReference;
    const elementTouchTap = this._touchTapReference;
    const touchPoint = calculateTouchPoint(elementTouch, touch);

    elementTouchTap.style.left = touchPoint.left + 'px';
    elementTouchTap.style.top = touchPoint.top + 'px';
    elementTouchTap.style.width = '28px';
    elementTouchTap.style.height = '28px';

    setTimeout(() => {
        elementTouchTap.style = null;
        elementTouchTap.classList.add('tap-active');
    }, 250);

}
/* eslint no-console: 0 */

function removeAnimatedTouchPoint() {
    const elementTouchTap = this._touchTapReference;

    setTimeout(() => {
        elementTouchTap.style = null;
        elementTouchTap.classList.remove('tap-active');
    }, 250);
}

function _handleTouchStart(event) {
    if (event.nativeEvent && event.nativeEvent.targetTouches) {
        this.addAnimatedTouchPoint(event.nativeEvent.targetTouches[0]);
    }

}

function _handleTouchEnd(event) {
    return (event.nativeEvent && event.nativeEvent.targetTouches) ?
        this.removeAnimatedTouchPoint() : null;
}

function _handleMouseDown(event) {
    if (!this.hasTouchEvents()) {
        this.addAnimatedTouchPoint(event.nativeEvent);
    }
}

function _handleMouseUp() {
    if (!this.hasTouchEvents()) {
        this.removeAnimatedTouchPoint();
    }

}

/**
 * Makes the given component "calculateTouchPoint".
 *
 * @param object component Component.
 */
function getClassesDecorator(component) {
    component.prototype.addAnimatedTouchPoint = addAnimatedTouchPoint;
    component.prototype.removeAnimatedTouchPoint = removeAnimatedTouchPoint;
    component.prototype.setTouchReference = setTouchReference;
    component.prototype.setTouchTapReference = setTouchTapReference;
    component.prototype._handleMouseDown = _handleMouseDown;
    component.prototype._handleMouseUp = _handleMouseUp;
    component.prototype._handleTouchEnd = _handleTouchEnd;
    component.prototype._handleTouchStart = _handleTouchStart;
}

export default getClassesDecorator;
