function map(transformFn) {
  const inputObservable = this
  const outputObservable = createObservable(outputObserver => {
    inputObservable.subscribe({
      next: x => {
        const y = transformFn(x)
        outputObserver.next(y)
      },
      error: e => outputObserver.error(e),
      complete: () => outputObserver.complete()
    })
  })
  return outputObservable
}
function filter(conditionFn) {
  const inputObservable = this
  const outputObservable = createObservable(outputObserver => {
    inputObservable.subscribe({
      next: x => {
        if (conditionFn(x)) {
          outputObserver.next(x)
        }
      },
      error: e => outputObserver.error(e),
      complete: () => outputObserver.complete()
    })
  })
  return outputObservable
}
function delay(period) {
  const inputObservable = this
  const outputObservable = createObservable(outputObserver => {
    inputObservable.subscribe({
      next: x => setTimeout(() => outputObserver.next(x), period),
      error: e => outputObserver.error(e),
      complete: () => outputObserver.complete()
    })
  })
  return outputObservable
}
function createObservable(subscribe) {
  return {
    subscribe,
    map,
    filter,
    delay
  }
}

const clickObservable = createObservable(ob => {
  document.addEventListener('click', ob.next)
})

const observer = {
  next: function nextCallBack(data) {
    console.log(data)
  },
  error: function errorCallback(err) {
    console.error(err)
  },
  complete: function completeCallback() {
    console.log('done')
  }
}
clickObservable
  .map(e => e.clientX)
  .filter(x => x < 500)
  .delay(1000)
  .subscribe(observer)
