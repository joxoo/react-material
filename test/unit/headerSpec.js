import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Header from '../../src/header';

describe('Component Header', function () {
    const renderer = TestUtils.createRenderer();
    let header;

    it('render Header component', function () {
        renderer.render(<Header title='test'/>);
        header = renderer.getRenderOutput();

        expect(header).to.be.ok;
        expect(header.type).to.equal('div');
        expect(header.props).have.property('className').to.equal('header');
    });

    it('render Header component with subtitle', function () {
        renderer.render(<Header title='test' subtitle='subtitle'/>);
        header = renderer.getRenderOutput();

        const subtitle = ShallowUtils.findWithClass(header, 'header-subtitle');
        expect(subtitle).to.be.ok;
    });

});
