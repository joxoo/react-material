import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import List from '../../src/list';
import FontIcon from '../../src/font-icon';

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

        const listItems = ShallowUtils.findAllWithClass(list, 'list-item');
        expect(listItems.length).to.equal(2);

        const itenWithIcon = ShallowUtils.findWithType(listItems[0], FontIcon);
        expect(itenWithIcon).to.be.ok;

    });

});
