// example 1

var earth = {
    isRound: true,
    numberFromSun: 3
}
describe("Earth", function() {
    it("is round ", function() {
        expect(earth.isRound).toBe(true)
    });
    it("is the third planet from the sun ", function() {
        expect(earth.numberFromSun).toBe(3)
    });
});

// example 2

describe("#push", function() {

    var arr;
    beforeEach(function() {
        arr = [1,2,3];
    });

    it("adds element to an array", function() {
        arr.push(7);
        expect(arr).toEqual([1,2,3,7]);
    });

    it("returns the new length of the array", function() {
        expect(arr.push(7)).toBe(4);
    });

    it("adds everything into array", function () {
        expect(arr.push({})).toBe(4);
    })
})

// example 3

// describe("Counting", function() {
//     var count = 0;

//     beforeEach(function() {
//         count++;
//     });

//     afterEach(function() {
//         count = 0;
//     });

//     it("has a counter that increments", function() {
//         expect(count).toBe(1);
//     });

//     it("gets reset", function() {
//         expect(count).toBe(1);
//     });

// })

// spies
// function add(a,b,c) {
//     return a+b+c;
// }

// describe("add", function () {
//     var addSpy, results;
//     beforeEach(function() {
//         addSpy = spyOn(window, 'add');
//         result = addSpy();
//     })
//     it("is can have params tested", function() {
//         expect(addSpy).toHaveBeenCalled();
//     })
// })

// clocks
// describe("a simple setTimeout", function() {
//     // var sample;
//     // beforeEach(function() {
//     //     sample = jasmine.createSpy("sampleFunction");
//     //     jasmine.clock().install();
//     // });

//     // afterEach(function() {
//     //     jasmine.clock().uninstall();
//     // });

//     // it("is only invoked after 1000 milliseconds", function() {
//     //     setTimeout(function() {
//     //         sample();
//     //     }, 1000);
//     //     jasmine.clock().tick(999);
//     //     expect(sample).not.toHaveBeenCalled();
//     //     jasmine.clock().tick(1);
//     //     expect(sample).toHaveBeenCalled();
//     // })

//     var dummyFunction;

//     beforeEach(function() {
//         dummyFunction = jasmine.create("dunnyFunction");
//         jasmine.clock().install();
//     });

//     afterEach(function( {
//         jasmine.clock().uninstall();
//     });

//     it("checks to the the number of times a function is called", function() {
//         setInterval(function() {
//             dummyFunction();
//         }, 1000);
//         jasmine.clock().tick(999);
//         expect(dummyFunction.calls.count()).toBe(0);
//         jasmine.clock().tick(1000);
//         expect(dummyFunction.calls.count()).toBe(1);
//         jasmine.clock().tick(1);
//         expect(dummyFunction.calls.count()).toBe(2);
//     });
// });

// describe("A suite is just a function", function () {
//     var a;

//     it("and so is a spec", function () {
//         a = true;

//         expect(a).toBe(true);
//     });
// });

// describe("A spec", function () {
//     beforeEach(function () {
//         this.foo = 0;
//     });

//     it("can use the `this` to share state", function () {
//         expect(this.foo).toEqual(0);
//         this.bar = "test pollution?";
//     });

//     it("prevents test pollution by having an empty `this` created for the next spec", function () {
//         expect(this.foo).toEqual(0);
//         expect(this.bar).toBe(undefined);
//     });
// })

// describe("A spec using the fail function", function () {
//     var foo = function (x, callBack) {
//         if (x) {
//             callBack();
//         }
//     };

//     it("should not call the callBack", function () {
//         foo(false, function () {
//             fail("Callback has been called");
//         });
//     });
// });

describe("A spec", function () {
    var foo;

    beforeEach(function () {
        foo = 0;
        foo += 1;
    });

    afterEach(function () {
        foo = 0;
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });

    describe("nested inside a second describe", function () {
        var bar;

        beforeEach(function () {
            bar = 1;
        });

        it("can reference both scopes as needed", function () {
            expect(foo).toEqual(bar);
        });
    });
});