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
            // if all the promise fails.
            if (a === prs.length) reject(new Error('All promise are failed'))
          })
      })
    })
  }
}

// without async
if (!Promise.order) {
  Promise.order = function(tasks) {
    if (!Array.isArray(tasks))
      throw new Error('Promise should be contained in an Array')
    return tasks.reduce((promiseChain, currentPromise) => {
      return promiseChain.then(results =>
        currentPromise
          .then(result => {
            return results.concat(result)
          })
          .catch(() => {
            return results.concat(null)
          })
      )
    }, Promise.resolve().then(() => []))
  }
}

// with async
if (!Promise.order) {
  Promise.order = async function(tasks) {
    const results = []
    if (!Array.isArray(tasks))
      throw new Error('Promise should be contained in an Array')
    for (const task of tasks) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const data = await task
        results.push(data)
      } catch (e) {
        results.push(null)
      }
    }
    return results
  }
}
