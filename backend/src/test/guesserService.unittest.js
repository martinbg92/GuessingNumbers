const guesserService = require('../services/guesserService')();
const expect = require('chai').expect;

describe('Testing service function', function()
{
    it("get ther number entered", function(){
        let response=guesserService.getEnteredNumber(20000);
        expect(response).to.be.eql(20000);

    })
})
