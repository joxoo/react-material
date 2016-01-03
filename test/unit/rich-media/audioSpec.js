import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Audio from '../../../src/rich-media/audio';

describe('Component Audio', function () {
    const renderer = TestUtils.createRenderer();
    const props = {
        sources: [{
            src: 'http://wwww.example.com/example.mp3',
            type: 'audio/mpg'
        }]
    };
    let audio;


    it('render audio component', function() {

        renderer.render(<Audio {...props} />);
        audio = renderer.getRenderOutput();

        expect(audio).to.be.ok;
        expect(audio.type).to.equal('audio');
        expect(audio.props).have.property('controls').to.equal(true);
        expect(audio.props).have.property('autoplay').to.equal(false);
    });

    it('render source in audio component', function() {

        renderer.render(<Audio {...props} />);
        audio = renderer.getRenderOutput();

        const sources = ShallowUtils.findAllWithType(audio, 'source');
        expect(sources.length).to.equal(1);

        const source = sources[0];
        expect(source.props).have.property('src').to.equal('http://wwww.example.com/example.mp3');
        expect(source.props).have.property('type').to.equal('audio/mpg')


    });

});
