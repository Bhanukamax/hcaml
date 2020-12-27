const moo = require('moo')

module.exports = moo.compile({
  WHITE_SPACE:      /[ \t]+/,
  COMMENT: /\/\/.*?$/,
  NUMBER:  /0|[1-9][0-9]*/,
  STRING:  /"(?:\\["\\]|[^\n"\\])*"/,
  TAG:  /[a-zA-Z][a-zA-Z0-9]*/,
  LPAREN:  '[',
  COMMA:  ',',
  RPAREN:  ']',
  kEYWORD: [],
  LINE_BRAKE:      { match: /\n/, lineBreaks: true },
})


 
