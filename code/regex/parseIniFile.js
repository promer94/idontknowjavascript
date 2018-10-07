function parseINI(string) {
  // Start with an object to hold the top-level fields
  const result = {}
  let section = result
  string.split(/\r?\n/).forEach(line => {
    let match
    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2] //eslint-disable-line
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {} //eslint-disable-line
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error(`Line '${line}' is not valid.`)
    }
  })
  return result
}

console.log(
  parseINI(`
name=Vasilis
[address]
city=Tessaloniki`)
)
// → {name: "Vasilis", address: {city: "Tessaloniki"}}
