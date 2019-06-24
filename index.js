const shift = params => {
  params.shift();
  return params;
};

const unshift = params => {
  return params.unshift();
};

const pop = params => {
  params.pop();
  return params;
};
const push = (params, value) => {
  params.push(value);
  return params;
};

const hello = () => {
    console.log('Hello')
}

module.exports = {
  _shift: shift,
  _unshift: unshift,
  _pop: pop,
  _push: push,
  _hello:hello
};
