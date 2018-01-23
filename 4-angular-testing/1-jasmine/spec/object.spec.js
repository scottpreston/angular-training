describe("test basic jasmine" , function() {
    it("test hello", function() {
        var o = require('../object');
        expect(o()).toEqual("world");
    });
});