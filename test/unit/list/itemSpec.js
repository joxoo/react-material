import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import ListItem from '../../../src/list/item';
import FontIcon from '../../../src/font-icon';

describe('Component ListItem', function () {
    const renderer = TestUtils.createRenderer();
    let listItem;

    it('render ListItem with icon', function () {
        renderer.render(<ListItem icon='test' />);
        listItem = renderer.getRenderOutput();

        expect(listItem).to.be.ok;
        expect(listItem.type).to.equal('li');
        expect(listItem.props).have.property('className').to.equal('list-item');

        const fontIcon = ShallowUtils.findAllWithType(listItem, FontIcon);
        expect(fontIcon).to.be.ok;
    });

    it('render ListItem component with title', function () {
        renderer.render(<ListItem title='test' />);
        listItem = renderer.getRenderOutput();

        const title = ShallowUtils.findWithClass(listItem, 'list-item-title');
        expect(title).to.be.ok;
    });

    it('render ListItem with children', function () {
        renderer.render(<ListItem><span>test</span></ListItem>);
        listItem = renderer.getRenderOutput();

        const listItems = ShallowUtils.findAllWithType(listItem, 'span');
        expect(listItems.length).to.equal(1);
    });
});
