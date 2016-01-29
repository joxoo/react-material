import React from 'react';
import ShallowUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import DialogAlert from '../../../src/dialog/alert';

describe('Component DialogAlert', function () {
    const renderer = TestUtils.createRenderer();
    const buttons = {
        agree: {
            label: 'agree',
            onClick() {}
        },
        disagree: {
            label: 'disagree',
            onClick() {}
        }
    };

    let dialogAlert;

    it('render DialogAlert component', function () {
        renderer.render(<DialogAlert {...buttons}/>);
        dialogAlert = renderer.getRenderOutput();

        expect(dialogAlert).to.be.ok;
        expect(dialogAlert.type).to.equal('div');
        expect(dialogAlert.props).have.property('className').to.equal('dialog-wrapper');

        const dialog = ShallowUtils.findWithClass(dialogAlert, 'dialog-alert');
        const dialogOverlay = ShallowUtils.findWithClass(dialogAlert, 'dialog-overlay');

        expect(dialog).to.be.ok;
        expect(dialogOverlay).to.be.ok;
    });

    it('render DialogAlert component with title', function () {
        renderer.render(<DialogAlert {...buttons} title='test'/>);
        dialogAlert = renderer.getRenderOutput();

        const dialogTitle = ShallowUtils.findWithClass(dialogAlert, 'dialog-alert-title');

        expect(dialogTitle).to.be.ok;
    });

    it('render DialogAlert component with content', function () {
        renderer.render(<DialogAlert {...buttons} content='foo bar'/>);
        dialogAlert = renderer.getRenderOutput();

        const dialogContent = ShallowUtils.findWithClass(dialogAlert, 'dialog-alert-content-box');

        expect(dialogContent).to.be.ok;
        expect(dialogContent.props).to.have.property('children').equal('foo bar');
    });
});
