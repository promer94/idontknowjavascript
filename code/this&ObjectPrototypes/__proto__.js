Object.defineProperty(Object.prototype, '__proto__', {
  //eslint-disable-line
  get() {
    //eslint-disable-line
    return Object.getPrototypeOf(this) //eslint-disable-line
  },
  set(o) {
    //eslint-disable-line
    // setPrototypeOf(..) as of ES6
    Object.setPrototypeOf(this, o) //eslint-disable-line
    return o //eslint-disable-line
  }
}) //eslint-disable-line
