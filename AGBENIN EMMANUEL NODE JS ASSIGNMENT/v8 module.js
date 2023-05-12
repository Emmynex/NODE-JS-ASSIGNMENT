/*26. V8 module
To access information about V8 (the JavaScript engine)*/
// v8.cachedDataVersionTag()
console.log(v8.cachedDataVersionTag()); 
// 3947234607
// The value returned by v8.cachedDataVersionTag() is derived from the V8
// version, command-line flags, and detected CPU features. Test that the value
// does indeed update when flags are toggled.
v8.setFlagsFromString('--allow_natives_syntax');
console.log(v8.cachedDataVersionTag()); // 183726201 