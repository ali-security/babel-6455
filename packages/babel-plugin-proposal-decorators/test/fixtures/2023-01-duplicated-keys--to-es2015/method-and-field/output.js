var _init_a, _initProto, _Foo;
const dec = () => {};
class Foo {
  constructor() {
    babelHelpers.defineProperty(this, "a", (_initProto(this), _init_a(this, 123)));
  }
  a() {
    return 1;
  }
}
_Foo = Foo;
[_init_a, _initProto] = babelHelpers.applyDecs2301(_Foo, [[dec, 2, "a"], [dec, 0, "a"]], []).e;
