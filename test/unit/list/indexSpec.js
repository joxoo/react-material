import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import List from '../../../src/list/index';
import ListItem from '../../../src/list/item';

describe('Component List', function () {
    const renderer = TestUtils.createRenderer();
    let list;

    it('render List component', function () {
        renderer.render(<List />);
        list = renderer.getRenderOutput();

        expect(list).to.be.ok;
        expect(list.type).to.equal('ul');
        expect(list.props).have.property('className').to.equal('list');
    });

    it('render List component with items', function () {
        const items = [{ title: 'foo', icon: 'test' }, { title: 'bar' }];
        renderer.render(<List items={ items }/>);
        list = renderer.getRenderOutput();

        const listItems = ShallowUtils.findAllWithType(list, ListItem);
        expect(listItems.length).to.equal(2);
    });

    it('render List component with 2 user list items', function () {
        renderer.render(
            <List>
                <ListItem>
                    <span>test</span>
                </ListItem>
                <ListItem>
                    <span>test</span>
                </ListItem>
            </List>
        );
        list = renderer.getRenderOutput();

        const listItems = ShallowUtils.findAllWithType(list, ListItem);
        expect(listItems.length).to.equal(2);
    });

    it('render List component with 1 user list item', function () {
        renderer.render(
            <List>
                <ListItem>
                    <span>test</span>
                </ListItem>
            </List>
        );
        list = renderer.getRenderOutput();

        const listItems = ShallowUtils.findAllWithType(list, ListItem);
        expect(listItems.length).to.equal(1);
    });

});
