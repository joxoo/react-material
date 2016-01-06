import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import CardHeader from '../../../src/card/card-header';
import Avatar from '../../../src/avatar';

describe('Component CardHeader', function () {
    const renderer = TestUtils.createRenderer();
    let cardHeader;

    it('render CardHeader component', function () {
        renderer.render(<CardHeader title='test'/>);
        cardHeader = renderer.getRenderOutput();

        expect(cardHeader).to.be.ok;
        expect(cardHeader.type).to.equal('div');
        expect(cardHeader.props).have.property('className').to.equal('card-header');
    });

    it('render CardHeader component with subtitle', function () {
        renderer.render(<CardHeader title='test' subtitle='subtitle'/>);
        cardHeader = renderer.getRenderOutput();

        const subtitle = ShallowUtils.findWithClass(cardHeader, 'card-header-subtitle');

        expect(subtitle).to.be.ok;
    });
    it('render CardHeader component with avatar', function () {
        const avatar = {
            background: 'test',
            src: 'icon.png'
        };

        renderer.render(<CardHeader title='test' avatar={ avatar }/>);
        cardHeader = renderer.getRenderOutput();

        const avatarComponent = ShallowUtils.findWithType(cardHeader, Avatar);

        expect(avatarComponent).to.be.ok;
        expect(avatarComponent.props).have.property('src').to.equal('icon.png');
        expect(avatarComponent.props).have.property('background').to.equal('test');
    });
});
