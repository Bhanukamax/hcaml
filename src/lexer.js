const moo = require('moo')

module.exports = moo.compile({
  WHITE_SPACE:      /[ \t]+/,
  COMMENT: /\/\/.*?$/,
  NUMBER:  /0|[1-9][0-9]*/,
  STRING:  /"(?:\\["\\]|[^\n"\\])*"/,
  TAG:  /[a-zA-Z][a-zA-Z0-9]*/,
  OPEN_PAREN:  '[',
  COMMA:  ',',
  CLOSE_PAREN:  ']',
  KEYWORD: [],
  LINE_BRAKE:      { match: /\n/, lineBreaks: true },
})


 
