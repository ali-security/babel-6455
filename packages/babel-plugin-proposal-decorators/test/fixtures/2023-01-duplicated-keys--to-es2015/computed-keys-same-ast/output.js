var _computedKey, _computedKey2, _initProto, _Foo;
const dec = () => {};
_computedKey = babelHelpers.toPropertyKey(getKey());
_computedKey2 = babelHelpers.toPropertyKey(getKey());
class Foo {
  constructor() {
    _initProto(this);
  }
  [_computedKey]() {
    return 1;
  }
  [_computedKey2]() {
    return 2;
  }
}
_Foo = Foo;
[_initProto] = babelHelpers.applyDecs2301(_Foo, [[dec, 2, _computedKey], [dec, 2, _computedKey2]], []).e;
