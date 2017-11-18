let chai = require('chai');
let expect = chai.expect; // we are using the "expect" style of Chai
const AModule = require('../app/modules/aModule');
let spies = require('chai-spies');
let chaiAsPromised = require("chai-as-promised");

chai.use(spies);
chai.use(chaiAsPromised);

describe('A module', function() {

    it('should have instanciate a new module', function() {
        let aModule = new AModule();
        expect(aModule).is.a('object');
    });
});