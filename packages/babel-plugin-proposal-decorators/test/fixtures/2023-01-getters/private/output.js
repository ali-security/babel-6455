var _call_a, _initProto;
const dec = () => {};
class Foo {
  static {
    [_call_a, _initProto] = babelHelpers.applyDecs2301(this, [[dec, 3, "a", function () {
      return this.value;
    }]], [], _ => #a in _).e;
  }
  constructor() {
    _initProto(this);
  }
  value = 1;
  get #a() {
    return _call_a(this);
  }
  getA() {
    return this.#a;
  }
}
