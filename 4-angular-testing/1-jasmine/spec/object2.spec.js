describe("test basic jasmine" , function() {
    it("test doubler", function() {
        var doubler = require('../object2');
        expect(doubler(1)).toEqual(2);
    });
    it("test that console was called", function() {
        spyOn(console,'log');
        var doubler = require('../object2');
        doubler(1);
        expect(console.log).toHaveBeenCalled();
    });
});