const moo = require('moo')

module.exports = moo.compile({
  WS:      /[ \t]+/,
  comment: /\/\/.*?$/,
  number:  /0|[1-9][0-9]*/,
  string:  /"(?:\\["\\]|[^\n"\\])*"/,
  tag:  /[a-zA-Z][a-zA-Z0-9]*/,
  lparen:  '[',
  comma:  ',',
  rparen:  ']',
  keyword: [],
  NL:      { match: /\n/, lineBreaks: true },
})


 
