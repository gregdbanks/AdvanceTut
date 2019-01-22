// example 1

// var earth = {
//     isRound: true,
//     numberFromSun: 3
// }
// describe("Earth", function() {
//     it("is round ", function() {
//         expect(earth.isRound).toBe(true)
//     });
//     it("is the third planet from the sun ", function() {
//         expect(earth.numberFromSun).toBe(3)
//     });
// });

// example 2

// describe("#push", function() {

//     var arr;
//     beforeEach(function() {
//         arr = [1,2,3];
//     });

//     it("adds element to an array", function() {
//         arr.push(7);
//         expect(arr).toEqual([1,2,3,7]);
//     });

//     it("returns the new length of the array", function() {
//         expect(arr.push(7)).toBe(4);
//     });

//     it("adds everything into array", function () {
//         expect(arr.push({})).toBe(4);
//     })
// })

// example 3

describe("Counting", function() {
    var count = 0;

    beforeEach(function() {
        count++;
    });

    afterEach(function() {
        count = 0;
    });

    it("has a counter that increments", function() {
        expect(count).toBe(1);
    });

    it("gets reset", function() {
        expect(count).toBe(1);
    });

})