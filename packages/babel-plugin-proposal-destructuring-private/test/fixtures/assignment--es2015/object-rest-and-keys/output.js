const _excluded = ["y"];
var _C;
let result;
class C {}
_C = C;
var _x = {
  writable: true,
  value: "#x"
};
var _y = {
  writable: true,
  value: "y"
};
babelHelpers.defineProperty(C, "a", "a");
babelHelpers.defineProperty(C, "b", "b");
babelHelpers.defineProperty(C, "c", "c");
(_C2 => {
  let x, y, z;
  x = babelHelpers.classStaticPrivateFieldSpecGet(_C, _C, _x), (_C2 = _C, ({
    y
  } = _C2), z = babelHelpers.objectWithoutProperties(_C2, _excluded), _C2);
  result = {
    x,
    y,
    z
  };
})();
