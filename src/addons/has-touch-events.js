function hasTouchEvents() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}


/**
 * Makes the given component "hasTouchEvents".
 *
 * @param object component Component.
 */
function getClassesDecorator(component) {
    component.prototype.hasTouchEvents = hasTouchEvents;
}

export default getClassesDecorator;
