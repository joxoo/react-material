import PureRenderMixin from 'react-addons-pure-render-mixin';


/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function pureRenderDecorator(component) {
    component.prototype.shouldComponentUpdate = PureRenderMixin;
}

export default pureRenderDecorator;
