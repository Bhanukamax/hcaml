const moo = require('moo')

module.exports = moo.compile({
  WHITE_SPACE:      /[ \t]+/,
  COMMENT: /\/\/.*?$/,
  NUMBER:  /0|[1-9][0-9]*/,
  STRING:  /"(?:\\["\\]|[^\n"\\])*"/,
  TAG:  /[a-zA-Z][a-zA-Z0-9]*/,
  CLASS_NAME:  /[\.][a-zA-Z0-9\.\-\_]*/,
  ID:  /[\#][a-zA-Z0-9\.\-\_]*/,
  ATTR:  /[\~][a-zA-Z0-9\\.\-\_]*[\:]"(?:\\["\\]|[^\n"\\])*"/,
  OPEN_PAREN:  '[',
  COMMA:  ',',
  CLOSE_PAREN:  ']',
  KEYWORD: [],
  LINE_BRAKE:      { match: /\n/, lineBreaks: true },
})


 
