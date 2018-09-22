if (!Object.is) {
  Object.is = function(v1, v2) {
    // test for `-0`
    if (v1 === 0 && v2 === 0) {
      return 1 / v1 === 1 / v2
    }
    // test for `NaN`
    if (v1 !== v1) {
      //eslint-disable-line
      return v2 !== v2 //eslint-disable-line
    }
    // everything else
    return v1 === v2
  }
}
