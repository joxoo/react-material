import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { getClasses } from './addons';
import Paper from './paper';
import IconButton from './buttons/icon-button';
import FontIcon from './font-icon';

@getClasses

class AppBar extends React.Component {

    static propTypes = {
        onLeftIconButtonClick: PropTypes.func,
        onRightIconButtonClick: PropTypes.func,
        showMenuIconButton: PropTypes.bool,
        iconLeft: PropTypes.string,
        iconRight: PropTypes.string,
        elementLeft: PropTypes.element,
        elementRight: PropTypes.element,
        title: React.PropTypes.node,
        depth: React.PropTypes.number,
        level: React.PropTypes.number
    };

    static defaultProps = {
        showMenuIconButton: true,
        title: '',
        depth: 1,
        level: 1
    };

    constructor(...args) {
        super(...args);
        this._onLeftIconButtonClick = this._onLeftIconButtonClick.bind(this);
        this._onRightIconButtonClick = this._onRightIconButtonClick.bind(this);
    }

    /* eslint  no-console: 0 */
    componentDidMount() {
        if (process.env.NODE_ENV !== 'production') {
            if (this.props.elementLeft && this.props.iconLeft) {
                console.warn(
                    'Properties iconClassNameLeft and iconElementLeft cannot be simultaneously ' +
                    'defined. Please use one or the other.'
                );
            }

            if (this.props.elementRight && this.props.iconRight) {
                console.warn(
                    'Properties iconClassNameRight and iconElementRight cannot be simultaneously ' +
                    'defined. Please use one or the other.'
                );
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    renderMenuElementLeft( props ) {
        let elementLeft = props.elementLeft;

        if (props.showMenuIconButton) {
            if (elementLeft) {
                elementLeft = React.cloneElement(elementLeft, {
                    className: this.getClasses('app-bar-icon-button', { className: elementLeft.className})
                });
                return (
                    <div className='app-bar-icon-left'>
                        { elementLeft }
                    </div>
                );
            }
            const child = <FontIcon className='app-bar-icon-button' icon={ (props.iconLeft) ? props.iconLeft: '0xE5D2' } />;
            return (
                <IconButton
                    className='app-bar-icon-left'
                    iconElement={ child }
                    onClick={ this._onLeftIconButtonClick } />
            );
        }
    }

    renderMenuElementRight( props ) {
        const iconRight = props.iconRight;
        let elementRight = props.elementRight;
        let prefix = 'app-bar-icon-button';

        if (elementRight) {
            switch (elementRight.type.displayName) {
            case 'IconButton':
                prefix = 'app-bar-icon-button';
                break;
            case 'FlatButton':
                prefix = 'app-bar-flat-button';
                break;
            }

            elementRight = React.cloneElement(elementRight, {
                className: this.getClasses(prefix, {className: elementRight.className})
            });

            return (
                <div className='app-bar-icon-right'>
                    { elementRight }
                </div>
            );
        }

        if (iconRight) {
            return (
                <IconButton
                    className='app-bar-icon-right'
                    iconClassName='app-bar-icon-button'
                    icon={ iconRight }
                    onClick={ this._onRightIconButtonClick } />
            );
        }
        return null;
    }

    _onLeftIconButtonClick(event) {
        if (this.props.onLeftIconButtonClick) {
            this.props.onLeftIconButtonClick(event);
        }
    }

    _onRightIconButtonClick(event) {
        if (this.props.onRightIconButtonClick) {
            this.props.onRightIconButtonClick(event);
        }
    }

    renderTitle( title, level ) {
        if ( typeof title === 'string' || title instanceof String ) {
            const Component = `h${level}`;
            
            return (  <Component className='app-bar-title app-bar-main'>{ title }</Component>  );
        }
        return ( <div className='app-bar-main'>{ title }</div> );
    }

    render() {
        const props = this.props;
        return (
            <Paper rounded={ false } className={ this.getClasses('app-bar', { className: props.className }) }
                   depth={ props.depth }>
                { this.renderMenuElementLeft( props ) }
                { this.renderTitle(props.title, props.level) }
                { this.renderMenuElementRight( props ) }
                { props.children }
            </Paper>
        );
    }

}

export default AppBar;
