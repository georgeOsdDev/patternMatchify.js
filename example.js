'use strict';

import matchify from './patternMatchify';
import {TYPES} from './patternMatchify';

let obj1 = {a: 1};
let obj2 = {a: 2};
let obj3 = {a: 3};
let obj4 = {a: "Hello"};
let obj5 = {a: "World"};
let obj6 = {a: false};
let obj7 = {};

console.log("---- obj1 ----");
let result1 = matchify(obj1).a.match({
            1 : (a) => { return "a is 1"},
            2 : (a) => { return "a is 2"},
      "Hello" : (a) => { return "a is Hello"},
[TYPES.String]: (a) => { return "a is type of String"},
[TYPES.Number]: (a) => { return "a is type of Number"},
            _ : (a) => { return "Not match"}
});
console.log(result1);

console.log("---- obj2 ----");
let result2 = matchify(obj2).a.match({
            1 : (a) => { return "a is 1"},
            2 : (a) => { return "a is 2"},
      "Hello" : (a) => { return "a is Hello"},
[TYPES.String]: (a) => { return "a is type of String"},
[TYPES.Number]: (a) => { return "a is type of Number"},
            _ : (a) => { return "Not match"}
});
console.log(result2);


console.log("---- obj3 ----");
let result3 = matchify(obj3).a.match({
            1 : (a) => { return "a is 1"},
            2 : (a) => { return "a is 2"},
      "Hello" : (a) => { return "a is Hello"},
[TYPES.String]: (a) => { return "a is type of String"},
[TYPES.Number]: (a) => { return "a is type of Number"},
            _ : (a) => { return "Not match"}

});
console.log(result3);

console.log("---- obj4 ----");
let result4 = matchify(obj4).a.match({
            1 : (a) => { return "a is 1"},
            2 : (a) => { return "a is 2"},
      "Hello" : (a) => { return "a is Hello"},
[TYPES.String]: (a) => { return "a is type of String"},
[TYPES.Number]: (a) => { return "a is type of Number"},
            _ : (a) => { return "Not match"}

});
console.log(result4);

console.log("---- obj5 ----");
let result5 = matchify(obj5).a.match({
            1 : (a) => { return "a is 1"},
            2 : (a) => { return "a is 2"},
      "Hello" : (a) => { return "a is Hello"},
[TYPES.String]: (a) => { return "a is type of String"},
[TYPES.Number]: (a) => { return "a is type of Number"},
            _ : (a) => { return "Not match"}
});
console.log(result5);

console.log("---- obj6 ----");
let result6 = matchify(obj6).a.match({
            1 : (a) => { return "a is 1"},
            2 : (a) => { return "a is 2"},
      "Hello" : (a) => { return "a is Hello"},
[TYPES.String]: (a) => { return "a is type of String"},
[TYPES.Number]: (a) => { return "a is type of Number"},
            _ : (a) => { return "Not match"}

});
console.log(result6);

console.log("---- obj7 ----");
try {
  let result7 = matchify(obj7).a.match({
                1 : (a) => { return "a is 1"},
                2 : (a) => { return "a is 2"},
          "Hello" : (a) => { return "a is Hello"},
    [TYPES.String]: (a) => { return "a is type of String"},
    [TYPES.Number]: (a) => { return "a is type of Number"},
  });
  console.log(result7);
} catch(e){
  console.log(e);
}
