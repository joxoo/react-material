import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import RichMedia, { Video, Audio, Picture } from '../../../src/rich-media/index';

describe('Component RichMedia', function () {
    const renderer = TestUtils.createRenderer();
    const props = {
        sources: [
            {
                src: 'http://wwww.example.com/example.mpg',
                type: 'video/mpg'
            },
            {
                src: 'http://wwww.example.com/example.mp3',
                type: 'audio/mpg'
            },
            {
                src: 'http://wwww.example.com/example.png',
                type: 'image/png',
                alt: 'test'
            }
        ]
    };
    let richMedia;


    it('render richMedia component', function() {

        renderer.render(<RichMedia {...props} />);
        richMedia = renderer.getRenderOutput();

        expect(richMedia).to.be.ok;
        expect(richMedia.type).to.equal('div');
        expect(richMedia.props).have.property('className').to.equal('rich-media');
    });

    it('should render a video component', function() {

        renderer.render(<RichMedia {...props} />);
        richMedia = renderer.getRenderOutput();

        const video = ShallowUtils.findWithType(richMedia, Video);
        expect(video).to.be.ok;
        expect(video.props).have.property('sources').to.deep.equals([
            {
                src: 'http://wwww.example.com/example.mpg',
                type: 'video/mpg'
            }
        ]);
    });

    it('should render a audio component', function() {

        renderer.render(<RichMedia {...props} />);
        richMedia = renderer.getRenderOutput();

        const audio = ShallowUtils.findWithType(richMedia, Audio);
        expect(audio).to.be.ok;
        expect(audio.props).have.property('sources').to.deep.equals([
            {
                src: 'http://wwww.example.com/example.mp3',
                type: 'audio/mpg'
            }
        ]);
    });
});
