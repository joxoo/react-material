import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { getClasses } from  '../addons';
import Tab from './tab';

@getClasses

class Tabs extends React.Component {

    static propTypes = {
        items : PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string.isRequired,
            icon: PropTypes.shape({
                background: PropTypes.string,
                color: PropTypes.string,
                icon: PropTypes.string
            })
        })),
        selected: PropTypes.string,
        onTabSelect: PropTypes.func.isRequired
    };

    static defaultProps = {
        items: []
    };

    constructor(props, context) {
        super(props, context);

        this.state = { selected: props.selected, slide: { left: 0, width: 0, display: 'none' } };
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.renderTab = this.renderTab.bind(this);
        this.tabs = [];
    }

    componentDidMount() {
        this.setState({ slide: this.getSlideStyles(this.state.selected) });
    }

    getSlideStyles(selected) {
        const tabClientRect = this.tabs[selected].getBoundingClientRect();
        const tabsClientRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        const left = tabClientRect.left - tabsClientRect.left;
        const width = tabClientRect.width;

        return { left, width };
    }

    handleOnSelect(value) {
        this.setState({ selected: value, slide: this.getSlideStyles(value) });
        this.props.onTabSelect(value);
    }

    renderTab(props) {
        const setReference = (tab) => {
            const node = ReactDOM.findDOMNode(tab);
            this.tabs[props.value] = node;
        };

        return (<Tab { ...props }
            onSelect={ this.handleOnSelect }
            key={ `tab-${props.value}` } ref={ setReference } />);
    }

    render() {
        const { items, ...others } = this.props;
        const tabs = items.map(this.renderTab);
        const slideStyle = this.state.slide;
        return (
            <div className={ this.getClasses('tabs', others) } >
                { tabs }
                <div className='tabs-slide' style={ slideStyle }/>
            </div>
        );
    }
}

export { Tab };
export default Tabs;
