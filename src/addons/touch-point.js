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
    elementTouchTap.style.width = '2px';
    elementTouchTap.style.height = '2px';
    elementTouchTap.style = null;
    elementTouchTap.classList.add('tap-active');

}
/* eslint no-console: 0 */

function removeAnimatedTouchPoint() {
    const elementTouchTap = this._touchTapReference;

    if (elementTouchTap) {
        elementTouchTap.style = null;
        elementTouchTap.classList.remove('tap-active');
    }
}

function _handleAnimation(event) {
    const nativeEvent = event.nativeEvent.targetTouches ? event.nativeEvent.targetTouches[0] : event.nativeEvent;

    this.addAnimatedTouchPoint(nativeEvent);
    setTimeout(this.removeAnimatedTouchPoint.bind(this), 500);
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
    component.prototype._handleAnmation = _handleAnimation;
}

export default getClassesDecorator;
