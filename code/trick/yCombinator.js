/* eslint-disable */
(fn => 
  (f => 
      f(f))
        (f => 
          fn(n => 
            f(f)(n))))(
              g => 
                n =>
                  [1, 2].indexOf(n) > -1 ? 1 : g(n - 1) + g(n - 2)
)(10)
