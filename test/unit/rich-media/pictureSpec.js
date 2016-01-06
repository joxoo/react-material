import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Picture from '../../../src/rich-media/picture';

describe('Component Picture', function () {
    const renderer = TestUtils.createRenderer();
    const props = {
        sources: [{
            src: 'http://wwww.example.com/example.png',
            type: 'image/png',
            alt: 'test'
        }]
    };
    let picture;


    it('render picture component', function() {

        renderer.render(<Picture{...props} />);
        picture = renderer.getRenderOutput();

        expect(picture).to.be.ok;
        expect(picture.type).to.equal('picture');
    });

    it('render source in picture component', function() {

        renderer.render(<Picture {...props} />);
        picture = renderer.getRenderOutput();

        const sources = ShallowUtils.findAllWithType(picture, 'source');
        expect(sources.length).to.equal(1);

        const source = sources[0];
        expect(source.props).have.property('srcSet').to.equal('http://wwww.example.com/example.png');
        expect(source.props).have.property('type').to.equal('image/png');


    });

    it('should picture has a img as fallback', function() {

        renderer.render(<Picture {...props} />);
        picture = renderer.getRenderOutput();

        const fallback = ShallowUtils.findWithType(picture, 'img');
        expect(fallback).to.be.ok;

        expect(fallback.props).have.property('src').to.equal('http://wwww.example.com/example.png');
        expect(fallback.props).have.property('type').to.equal('image/png');
        expect(fallback.props).have.property('alt').to.equal('test');
    });

});
