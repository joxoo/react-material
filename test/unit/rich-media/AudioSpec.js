import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Audio from '../../../src/rich-media/audio';

describe('Component Audio', function () {
    const renderer = TestUtils.createRenderer();
    const props = {
        url: 'http://wwww.example.com/example.mp3',
        contentType: 'audio/mpg'
    }
    let audio;


    it('render page component', function() {

        renderer.render(<Audio {...props} />);
        audio = renderer.getRenderOutput();

        expect(audio).to.be.ok;
        expect(audio.type).to.equal('audio');
    });

});
