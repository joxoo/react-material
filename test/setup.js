import jsdom from 'jsdom';
import chai from 'chai';
import chaiString from 'chai-string';
import chaiSubset from 'chai-subset';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import chaiThings from 'chai-things';
import 'sinon-as-promised';

global.document = jsdom.jsdom('<!doctype html><html><head><base href="http://localhost"></head><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;
global.window.styleMedia = true;

chai.use(chaiString);
chai.use(chaiSubset);
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiThings);
