Experimental
---

# PaternMatchify.js

Pattern matching like Scala with Refrect/Proxy API.

```javascript
import matchify from './paternMatchify';
import {TYPES} from './paternMatchify';

let obj = {a: 1};
let result1 = matchify(obj).a.match({
            1 : (a) => { return "a is 1"},
            2 : (a) => { return "a is 2"},
      "Hello" : (a) => { return "a is Hello"},
[TYPES.String]: (a) => { return "a is type of String"},
[TYPES.Number]: (a) => { return "a is type of Number"},
            _ : (a) => { return "Not match"}
});
console.log(result1); // a is 1
```