import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import BottomSheet from '../../src/bottom-sheet';

describe('Component BottomSheet', function () {
    const renderer = TestUtils.createRenderer();
    let bottomSheet;

    it('render BottomSheet component', function () {
        renderer.render(<BottomSheet />);
        bottomSheet = renderer.getRenderOutput();

        expect(bottomSheet).to.be.ok;
        expect(bottomSheet.type).to.equal('div');
        expect(bottomSheet.props).have.property('className').to.equal('bottom-sheet');
    });

    it('render modal BottomSheet component', function () {
        renderer.render(<BottomSheet modal={ true } />);
        bottomSheet = renderer.getRenderOutput();

        expect(bottomSheet).to.be.ok;
        expect(bottomSheet.type).to.equal('div');
        expect(bottomSheet.props).have.property('className').to.equal('bottom-sheet bottom-sheet-modal');

        const layer = ShallowUtils.findWithClass(bottomSheet, 'bottom-sheet-layer');

        expect(layer).to.be.ok;
    });
});
