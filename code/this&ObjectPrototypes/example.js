function identify() {
  return this.name.toUpperCase()
}

function speak() {
  const greeting = `Hello, I'm ${identify.call(this)}`
  console.log(greeting)
}

const me = {
  name: 'Kyle'
}

const you = {
  name: 'Reader'
}

identify.call(me) // KYLE
identify.call(you) // READER

speak.call(me) // Hello, I'm KYLE
speak.call(you) // Hello, I'm READER
