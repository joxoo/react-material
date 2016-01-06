import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Avatar from '../../src/avatar';
import FontIcon from '../../src/font-icon';

describe('Component Avatar', function () {
    const renderer = TestUtils.createRenderer();
    let avatar;

    it('render card component', function () {
        renderer.render(<Avatar />);
        avatar = renderer.getRenderOutput();

        expect(avatar).to.be.ok;
        expect(avatar.type).to.equal('div');
        expect(avatar.props).have.property('className').to.equal('avatar');
    });

    it('render avatar component with icon', function () {
        const icon = {
            icon: 'test',
            color: 'blue'
        };
        renderer.render(<Avatar icon={ icon } />);
        avatar = renderer.getRenderOutput();

        const avatarIcon = ShallowUtils.findWithType(avatar, FontIcon);

        expect(avatarIcon).to.be.ok;
        expect(avatarIcon.props).have.property('className').to.equal('avatar-icon');
        expect(avatarIcon.props).have.property('icon').to.equal('test');
    });
    it('render avatar component with letter', function () {
        const letter = {
            character: 'T',
            color: 'blue'
        };
        renderer.render(<Avatar letter={ letter } />);
        avatar = renderer.getRenderOutput();

        const avatarIcon = ShallowUtils.findWithType(avatar, 'span');

        expect(avatarIcon).to.be.ok;
        expect(avatarIcon.props).have.property('className').to.equal('avatar-letter color-blue');
    });
    it('render avatar component with image', function () {
        renderer.render(<Avatar image='test.png' />);
        avatar = renderer.getRenderOutput();

        const avatarImage = ShallowUtils.findWithType(avatar, 'img');

        expect(avatarImage).to.be.ok;
        expect(avatarImage.props).have.property('className').to.equal('avatar-image');
        expect(avatarImage.props).have.property('src').to.equal('test.png');
    });
});
