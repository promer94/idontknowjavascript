import debounce from './debounce'

describe('debounce', () => {
  it('Must pass a func', () => {
    expect(() => debounce(1)).toThrowError(new Error('Invalid function'))
  })
  it('Must have valid number', () => {
    expect(() => debounce(() => {}, '12')).toThrowError(
      new Error('Invalid delay number')
    )
  })
  it('Execution should be delay', () => {
    let a = 0
    const add = () => {
      a += 1
    }
    const debounceFunc = debounce(add)
    for (let i = 0; i < 1000; i += 1) {
      debounceFunc()
    }
    setTimeout(() => expect(a).toBe(1), 1000)
  })
})
