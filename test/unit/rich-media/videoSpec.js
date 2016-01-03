import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Video from '../../../src/rich-media/video';

describe('Component Video', function () {
    const renderer = TestUtils.createRenderer();
    const props = {
        sources: [{
            src: 'http://wwww.example.com/example.mp3',
            type: 'video/mpg'
        }]
    };
    let video;


    it('render video component', function() {

        renderer.render(<Video {...props} />);
        video = renderer.getRenderOutput();

        expect(video).to.be.ok;
        expect(video.type).to.equal('video');
        expect(video.props).have.property('controls').to.equal(true);
        expect(video.props).have.property('autoplay').to.equal(false);
    });

    it('render source in video component', function() {

        renderer.render(<Video {...props} />);
        video = renderer.getRenderOutput();

        const sources = ShallowUtils.findAllWithType(video, 'source');
        expect(sources.length).to.equal(1);

        const source = sources[0];
        expect(source.props).have.property('src').to.equal('http://wwww.example.com/example.mp3');
        expect(source.props).have.property('type').to.equal('video/mpg')


    });

    it('should video has poster property', function() {

        renderer.render(<Video {...props} poster="http://example.com/images/test.png" />);
        video = renderer.getRenderOutput();

        expect(video.props).have.property('poster').to.equal('http://example.com/images/test.png');
    });

});
