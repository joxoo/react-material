import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Card from '../../src/card';

describe('Component Card', function () {
    const renderer = TestUtils.createRenderer();
    let card;

    it('render card component', function () {
        renderer.render(<Card />);
        card = renderer.getRenderOutput();

        expect(card).to.be.ok;
        expect(card.type).to.equal('div');
        expect(card.props).have.property('className').to.equal('card');
    });

    it('render card component with children', function () {
        renderer.render(<Card><span>Test</span></Card>);
        card = renderer.getRenderOutput();

        const children = ShallowUtils.findWithType(card, 'span');

        expect(children).to.be.ok;
    });
});
