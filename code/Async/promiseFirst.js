if (!Promise.first) {
  Promise.first = function(prs) {
    if (!Array.isArray(prs))
      throw new Error('Promise should be contained in an Array')
    return new Promise((resolve, reject) => {
      let a = 0
      // loop through all promises
      prs.forEach(pr => {
        // normalize the value
        Promise.resolve(pr)
          // whichever one fulfills first wins, and
          // gets to resolve the main promise
          .then(resolve)
          .catch(error => {
            if (error) a += 1
            if (a === prs.length) reject(new Error('All promise are failed'))
          })
      })
    })
  }
}
