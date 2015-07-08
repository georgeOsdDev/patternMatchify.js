'use strict';

const TYPES = {
  Number: 'Number',
  String: 'String',
  Boolean: 'Boolean',
  Null: 'Null',
  Undefined: 'Undefined',
  Object: 'Object',
  Array: 'Array',
  Function: 'Function'
};

let typeOf = function(that){
  let t = Object.prototype.toString.call(that);
  return t.split(' ')[1].replace(']','');
};

let executeIfPossible = (func, val) => {
  if (typeof func === 'function'){
    return func.call(null, val);
  } else {
    return func;
  }
}

let matchify = (obj) => {
  return new Proxy(obj, {
    get(target, property, receiver){
        return {
          match(pattern){

            let val = target[property];
            let isValueMatch = Reflect.has(pattern, val);
            let isTypeMatch  = Reflect.has(pattern, typeOf(val));
            let isMissing = Reflect.has(target, property);

            if (isValueMatch){
              return executeIfPossible(pattern[val], val);
            } else if (isTypeMatch){
              return executeIfPossible(pattern[typeOf(val)], val);
            } else {
              return Reflect.has(pattern, '_') ? executeIfPossible(pattern._, val) : new Error('MatchError');
            }
          }
        };
      }
  });
};

export default matchify
export {TYPES, typeOf};
